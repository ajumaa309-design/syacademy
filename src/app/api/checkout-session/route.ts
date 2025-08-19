
import { NextResponse, NextRequest } from 'next/server';
// The import will be updated by the user to use the correct library
import Stripe from 'stripe';

// Make sure to add your secret key to environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    const { priceInCents, courseName, courseId, userId, userEmail } = await req.json();

    if (!priceInCents || !courseName || !courseId || !userId) {
         return NextResponse.json({ message: 'Missing required parameters' }, { status: 400 });
    }

    // You can create a customer in Stripe to link the payment to a user
    const customer = await stripe.customers.create({
        email: userEmail,
        metadata: {
            userId: userId,
        }
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: courseName,
              metadata: {
                courseId: courseId,
              }
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer: customer.id,
      success_url: `${req.nextUrl.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/payment/canceled`,
       metadata: {
        courseId: courseId,
        userId: userId,
      }
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: any) {
    console.error('Stripe Error:', error.message);
    return NextResponse.json({ message: `Internal Server Error: ${error.message}` }, { status: 500 });
  }
}
