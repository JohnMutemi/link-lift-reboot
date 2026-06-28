import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Pool } from "pg";
import { getServerConfig } from "../config.server";

const pool = new Pool({ connectionString: getServerConfig().databaseUrl });

// Bookings
export const listBookings = createServerFn({ method: "GET" }).handler(async () => {
  const res = await pool.query("SELECT * FROM bookings ORDER BY created_at DESC");
  return res.rows;
});

export const getBooking = createServerFn({ method: "GET" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const res = await pool.query("SELECT * FROM bookings WHERE id = $1", [data.id]);
    return res.rows[0] ?? null;
  });

export const createBooking = createServerFn({ method: "POST" })
  .inputValidator(z.object({ booking: z.any() }))
  .handler(async ({ data }) => {
    const b = data.booking;
    const res = await pool.query(
      `INSERT INTO bookings(booking_number, customer, container, destination, status, date, value, created_at)
       VALUES($1,$2,$3,$4,$5,$6,$7, now()) RETURNING *`,
      [b.bookingNumber, b.customer, b.container, b.destination, b.status, b.date, b.value],
    );
    return res.rows[0];
  });

export const updateBooking = createServerFn({ method: "PUT" })
  .inputValidator(z.object({ id: z.string(), booking: z.any() }))
  .handler(async ({ data }) => {
    const b = data.booking;
    const res = await pool.query(
      `UPDATE bookings SET booking_number=$1, customer=$2, container=$3, destination=$4, status=$5, date=$6, value=$7, updated_at=now() WHERE id=$8 RETURNING *`,
      [b.bookingNumber, b.customer, b.container, b.destination, b.status, b.date, b.value, data.id],
    );
    return res.rows[0];
  });

export const deleteBooking = createServerFn({ method: "DELETE" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await pool.query("DELETE FROM bookings WHERE id = $1", [data.id]);
    return { success: true };
  });

// Similar CRUD functions can be created for customers, drivers, fleet, approvals

// Customers
export const listCustomers = createServerFn({ method: "GET" }).handler(async () => {
  const res = await pool.query("SELECT * FROM customers ORDER BY name");
  return res.rows;
});

export const createCustomer = createServerFn({ method: "POST" })
  .inputValidator(z.object({ customer: z.any() }))
  .handler(async ({ data }) => {
    const c = data.customer;
    const res = await pool.query(
      `INSERT INTO customers(name, contact, bookings, revenue, outstanding, status, created_at)
       VALUES($1,$2,$3,$4,$5,$6, now()) RETURNING *`,
      [c.company || c.name, c.contact, c.bookings || 0, c.revenue || null, c.outstanding || null, c.status || 'active'],
    );
    return res.rows[0];
  });

export const updateCustomer = createServerFn({ method: "PUT" })
  .inputValidator(z.object({ id: z.string(), customer: z.any() }))
  .handler(async ({ data }) => {
    const c = data.customer;
    const res = await pool.query(
      `UPDATE customers SET name=$1, contact=$2, bookings=$3, revenue=$4, outstanding=$5, status=$6, updated_at=now() WHERE id=$7 RETURNING *`,
      [c.company || c.name, c.contact, c.bookings || 0, c.revenue || null, c.outstanding || null, c.status || 'active', data.id],
    );
    return res.rows[0];
  });

export const deleteCustomer = createServerFn({ method: "DELETE" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await pool.query("DELETE FROM customers WHERE id = $1", [data.id]);
    return { success: true };
  });

// Drivers
export const listDrivers = createServerFn({ method: "GET" }).handler(async () => {
  const res = await pool.query("SELECT * FROM drivers ORDER BY name");
  return res.rows;
});

export const createDriver = createServerFn({ method: "POST" })
  .inputValidator(z.object({ driver: z.any() }))
  .handler(async ({ data }) => {
    const d = data.driver;
    const res = await pool.query(
      `INSERT INTO drivers(name, phone, truck, license_expiry, trips_completed, status, created_at)
       VALUES($1,$2,$3,$4,$5,$6, now()) RETURNING *`,
      [d.name, d.phone, d.truck, d.licenseExpiry, d.tripsCompleted || 0, d.status || 'available'],
    );
    return res.rows[0];
  });

export const updateDriver = createServerFn({ method: "PUT" })
  .inputValidator(z.object({ id: z.string(), driver: z.any() }))
  .handler(async ({ data }) => {
    const d = data.driver;
    const res = await pool.query(
      `UPDATE drivers SET name=$1, phone=$2, truck=$3, license_expiry=$4, trips_completed=$5, status=$6, updated_at=now() WHERE id=$7 RETURNING *`,
      [d.name, d.phone, d.truck, d.licenseExpiry, d.tripsCompleted || 0, d.status || 'available', data.id],
    );
    return res.rows[0];
  });

export const deleteDriver = createServerFn({ method: "DELETE" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await pool.query("DELETE FROM drivers WHERE id = $1", [data.id]);
    return { success: true };
  });

// Fleet
export const listFleet = createServerFn({ method: "GET" }).handler(async () => {
  const res = await pool.query("SELECT * FROM fleet ORDER BY truck_number");
  return res.rows;
});

export const createFleet = createServerFn({ method: "POST" })
  .inputValidator(z.object({ vehicle: z.any() }))
  .handler(async ({ data }) => {
    const v = data.vehicle;
    const res = await pool.query(
      `INSERT INTO fleet(truck_number, driver, mileage, status, next_service_date, current_location, created_at)
       VALUES($1,$2,$3,$4,$5,$6, now()) RETURNING *`,
      [v.truckNumber || v.truck_number, v.driver, v.mileage, v.status || 'available', v.nextServiceDate, v.currentLocation],
    );
    return res.rows[0];
  });

export const updateFleet = createServerFn({ method: "PUT" })
  .inputValidator(z.object({ id: z.string(), vehicle: z.any() }))
  .handler(async ({ data }) => {
    const v = data.vehicle;
    const res = await pool.query(
      `UPDATE fleet SET truck_number=$1, driver=$2, mileage=$3, status=$4, next_service_date=$5, current_location=$6, updated_at=now() WHERE id=$7 RETURNING *`,
      [v.truckNumber || v.truck_number, v.driver, v.mileage, v.status || 'available', v.nextServiceDate, v.currentLocation, data.id],
    );
    return res.rows[0];
  });

export const deleteFleet = createServerFn({ method: "DELETE" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await pool.query("DELETE FROM fleet WHERE id = $1", [data.id]);
    return { success: true };
  });

// Approvals / status changes
export const listApprovals = createServerFn({ method: "GET" }).handler(async () => {
  const res = await pool.query("SELECT * FROM bookings ORDER BY created_at DESC");
  return res.rows;
});

export const approveBooking = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const res = await pool.query("UPDATE bookings SET status='approved', updated_at=now() WHERE booking_number=$1 RETURNING *", [data.id]);
    return res.rows[0];
  });

export const rejectBooking = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const res = await pool.query("UPDATE bookings SET status='rejected', updated_at=now() WHERE booking_number=$1 RETURNING *", [data.id]);
    return res.rows[0];
  });

