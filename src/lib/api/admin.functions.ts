import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Pool } from "pg";
import { getServerConfig } from "../config.server";

const pool = new Pool({ connectionString: getServerConfig().databaseUrl });

async function ensureTables() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS bookings (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      booking_number TEXT NOT NULL,
      customer TEXT NOT NULL,
      container TEXT NOT NULL,
      destination TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      date TEXT,
      value NUMERIC DEFAULT 0,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      contact TEXT,
      bookings INTEGER DEFAULT 0,
      revenue NUMERIC DEFAULT 0,
      outstanding NUMERIC DEFAULT 0,
      status TEXT DEFAULT 'active',
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS drivers (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      phone TEXT,
      truck TEXT,
      license_expiry TEXT,
      trips_completed INTEGER DEFAULT 0,
      status TEXT DEFAULT 'available',
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS fleet (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      truck_number TEXT NOT NULL,
      driver TEXT,
      mileage TEXT,
      status TEXT DEFAULT 'available',
      next_service_date TEXT,
      current_location TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `);
}

async function seedDefaultRows() {
  const existing = await pool.query("SELECT COUNT(*)::int AS count FROM bookings");
  if (existing.rows[0].count > 0) {
    return;
  }

  await pool.query(`
    INSERT INTO bookings (booking_number, customer, container, destination, status, date, value)
    VALUES
      ('BK-1001', 'Apex Logistics', 'CTR-2001', 'Mombasa', 'pending', '2026-07-02', 145000),
      ('BK-1002', 'Northwind Supplies', 'CTR-2002', 'Kampala', 'approved', '2026-07-03', 220000),
      ('BK-1003', 'Delta Cargo', 'CTR-2003', 'Dar es Salaam', 'in-transit', '2026-07-04', 310000)
  `);

  await pool.query(`
    INSERT INTO customers (name, contact, bookings, revenue, outstanding, status)
    VALUES
      ('Apex Logistics', 'ops@apex.co', 5, 4200000, 180000, 'active'),
      ('Northwind Supplies', 'finance@northwind.co', 2, 1800000, 45000, 'active')
  `);

  await pool.query(`
    INSERT INTO drivers (name, phone, truck, license_expiry, trips_completed, status)
    VALUES
      ('James Kariuki', '+254700111222', 'TRK-01', '2027-10-12', 18, 'available'),
      ('Maria Wanjiku', '+254700333444', 'TRK-02', '2027-08-21', 32, 'on-trip')
  `);

  await pool.query(`
    INSERT INTO fleet (truck_number, driver, mileage, status, next_service_date, current_location)
    VALUES
      ('TRK-01', 'James Kariuki', '124500', 'available', '2026-08-01', 'Nairobi'),
      ('TRK-02', 'Maria Wanjiku', '98000', 'on-trip', '2026-08-15', 'Mombasa')
  `);
}

export async function resetAdminTables() {
  await ensureTables();
  await pool.query("TRUNCATE TABLE bookings, customers, drivers, fleet RESTART IDENTITY CASCADE");
  await seedDefaultRows();
  return { success: true };
}

// Bookings
export const listBookings = createServerFn({ method: "GET" }).handler(async () => {
  await ensureTables();
  const res = await pool.query("SELECT * FROM bookings ORDER BY created_at DESC");
  return res.rows;
});

export const getBooking = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await ensureTables();
    const res = await pool.query("SELECT * FROM bookings WHERE id = $1", [data.id]);
    return res.rows[0] ?? null;
  });

export const createBooking = createServerFn({ method: "POST" })
  .validator(z.object({ booking: z.any() }))
  .handler(async ({ data }) => {
    await ensureTables();
    const b = data.booking;
    const res = await pool.query(
      `INSERT INTO bookings(booking_number, customer, container, destination, status, date, value, created_at)
       VALUES($1,$2,$3,$4,$5,$6,$7, now()) RETURNING *`,
      [b.bookingNumber, b.customer, b.container, b.destination, b.status, b.date, b.value],
    );
    return res.rows[0];
  });

export const updateBooking = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string(), booking: z.any() }))
  .handler(async ({ data }) => {
    await ensureTables();
    const b = data.booking;
    const res = await pool.query(
      `UPDATE bookings SET booking_number=$1, customer=$2, container=$3, destination=$4, status=$5, date=$6, value=$7, updated_at=now() WHERE id=$8 RETURNING *`,
      [b.bookingNumber, b.customer, b.container, b.destination, b.status, b.date, b.value, data.id],
    );
    return res.rows[0];
  });

export const deleteBooking = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await ensureTables();
    await pool.query("DELETE FROM bookings WHERE id = $1", [data.id]);
    return { success: true };
  });

// Similar CRUD functions can be created for customers, drivers, fleet, approvals

// Customers
export const listCustomers = createServerFn({ method: "GET" }).handler(async () => {
  await ensureTables();
  const res = await pool.query("SELECT * FROM customers ORDER BY name");
  return res.rows;
});

export const createCustomer = createServerFn({ method: "POST" })
  .validator(z.object({ customer: z.any() }))
  .handler(async ({ data }) => {
    await ensureTables();
    const c = data.customer;
    const res = await pool.query(
      `INSERT INTO customers(name, contact, bookings, revenue, outstanding, status, created_at)
       VALUES($1,$2,$3,$4,$5,$6, now()) RETURNING *`,
      [c.company || c.name, c.contact, c.bookings || 0, c.revenue || null, c.outstanding || null, c.status || 'active'],
    );
    return res.rows[0];
  });

export const updateCustomer = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string(), customer: z.any() }))
  .handler(async ({ data }) => {
    await ensureTables();
    const c = data.customer;
    const res = await pool.query(
      `UPDATE customers SET name=$1, contact=$2, bookings=$3, revenue=$4, outstanding=$5, status=$6, updated_at=now() WHERE id=$7 RETURNING *`,
      [c.company || c.name, c.contact, c.bookings || 0, c.revenue || null, c.outstanding || null, c.status || 'active', data.id],
    );
    return res.rows[0];
  });

export const deleteCustomer = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await ensureTables();
    await pool.query("DELETE FROM customers WHERE id = $1", [data.id]);
    return { success: true };
  });

// Drivers
export const listDrivers = createServerFn({ method: "GET" }).handler(async () => {
  await ensureTables();
  const res = await pool.query("SELECT * FROM drivers ORDER BY name");
  return res.rows;
});

export const createDriver = createServerFn({ method: "POST" })
  .validator(z.object({ driver: z.any() }))
  .handler(async ({ data }) => {
    await ensureTables();
    const d = data.driver;
    const res = await pool.query(
      `INSERT INTO drivers(name, phone, truck, license_expiry, trips_completed, status, created_at)
       VALUES($1,$2,$3,$4,$5,$6, now()) RETURNING *`,
      [d.name, d.phone, d.truck, d.licenseExpiry, d.tripsCompleted || 0, d.status || 'available'],
    );
    return res.rows[0];
  });

export const updateDriver = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string(), driver: z.any() }))
  .handler(async ({ data }) => {
    await ensureTables();
    const d = data.driver;
    const res = await pool.query(
      `UPDATE drivers SET name=$1, phone=$2, truck=$3, license_expiry=$4, trips_completed=$5, status=$6, updated_at=now() WHERE id=$7 RETURNING *`,
      [d.name, d.phone, d.truck, d.licenseExpiry, d.tripsCompleted || 0, d.status || 'available', data.id],
    );
    return res.rows[0];
  });

export const deleteDriver = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await ensureTables();
    await pool.query("DELETE FROM drivers WHERE id = $1", [data.id]);
    return { success: true };
  });

// Fleet
export const listFleet = createServerFn({ method: "GET" }).handler(async () => {
  await ensureTables();
  const res = await pool.query("SELECT * FROM fleet ORDER BY truck_number");
  return res.rows;
});

export const createFleet = createServerFn({ method: "POST" })
  .validator(z.object({ vehicle: z.any() }))
  .handler(async ({ data }) => {
    await ensureTables();
    const v = data.vehicle;
    const res = await pool.query(
      `INSERT INTO fleet(truck_number, driver, mileage, status, next_service_date, current_location, created_at)
       VALUES($1,$2,$3,$4,$5,$6, now()) RETURNING *`,
      [v.truckNumber || v.truck_number, v.driver, v.mileage, v.status || 'available', v.nextServiceDate, v.currentLocation],
    );
    return res.rows[0];
  });

export const updateFleet = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string(), vehicle: z.any() }))
  .handler(async ({ data }) => {
    await ensureTables();
    const v = data.vehicle;
    const res = await pool.query(
      `UPDATE fleet SET truck_number=$1, driver=$2, mileage=$3, status=$4, next_service_date=$5, current_location=$6, updated_at=now() WHERE id=$7 RETURNING *`,
      [v.truckNumber || v.truck_number, v.driver, v.mileage, v.status || 'available', v.nextServiceDate, v.currentLocation, data.id],
    );
    return res.rows[0];
  });

export const deleteFleet = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await ensureTables();
    await pool.query("DELETE FROM fleet WHERE id = $1", [data.id]);
    return { success: true };
  });

// Approvals / status changes
export const listApprovals = createServerFn({ method: "GET" }).handler(async () => {
  await ensureTables();
  const res = await pool.query("SELECT * FROM bookings ORDER BY created_at DESC");
  return res.rows;
});

export const approveBooking = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await ensureTables();
    const res = await pool.query("UPDATE bookings SET status='approved', updated_at=now() WHERE booking_number=$1 RETURNING *", [data.id]);
    return res.rows[0];
  });

export const rejectBooking = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await ensureTables();
    const res = await pool.query("UPDATE bookings SET status='rejected', updated_at=now() WHERE booking_number=$1 RETURNING *", [data.id]);
    return res.rows[0];
  });

