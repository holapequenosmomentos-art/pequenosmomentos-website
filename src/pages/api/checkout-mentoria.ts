export const prerender = false;

import type { APIRoute } from "astro";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const paymentMethod = formData.get("payment_method");
  const email = formData.get("email");
  const name = formData.get("fullname");

  if (paymentMethod === "stripe") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "mxn",
              product_data: {
                name: "Mentoría Premium",
                description: "Sesión privada 1 a 1 de 40 minutos",
              },
              unit_amount: 300000, 
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${import.meta.env.PUBLIC_DOMAIN}/exito?sid={CHECKOUT_SESSION_ID}`,
        cancel_url: `${import.meta.env.PUBLIC_DOMAIN}/asesoria-personalizada`,
        customer_email: email ? email.toString() : undefined,
        metadata: {
            customer_name: name ? name.toString() : "",
        }
      });

      if (session.url) {
        return redirect(session.url, 303);
      }
    } catch (err: any) {
      return new Response(err.message, { status: 500 });
    }
  }

  // Handle other payment methods or fallback
  return redirect("/asesoria-personalizada", 303);
};
