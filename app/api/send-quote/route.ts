import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Validate email configuration
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
  console.error(
    "Email configuration missing. Please set EMAIL_USER and EMAIL_PASSWORD in .env.local",
  );
}

// Configure your email settings
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, phone, email, serviceType, location, message } = formData;

    // Validate required fields
    if (!name || !phone || !email || !serviceType || !location) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email content for admin
    const adminEmailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .content { background: white; padding: 30px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 14px; font-weight: 600; color: #1e40af; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
            .info-block { background: #f0f4f8; padding: 15px; border-left: 4px solid #3b82f6; margin-bottom: 10px; border-radius: 4px; }
            .info-label { font-weight: 600; color: #1e40af; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
            .info-value { color: #333; font-size: 14px; }
            .message-box { background: #f9fafb; border: 1px solid #e5e7eb; padding: 15px; border-radius: 6px; margin-top: 10px; }
            .message-box p { margin: 0; white-space: pre-wrap; word-break: break-word; }
            .footer { background: #1e40af; color: white; padding: 20px; text-align: center; font-size: 12px; }
            .footer a { color: #93c5fd; text-decoration: none; }
            .timestamp { color: #6b7280; font-size: 12px; margin-top: 15px; }
            .badge { display: inline-block; background: #3b82f6; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 New Quote Request</h1>
              <p>New lead from website inquiry</p>
            </div>
            <div class="content">
              <div class="section">
                <div class="section-title">Customer Information</div>
                <div class="info-block">
                  <div class="info-label">Name</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-block">
                  <div class="info-label">Email</div>
                  <div class="info-value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="info-block">
                  <div class="info-label">Phone</div>
                  <div class="info-value"><a href="tel:${phone}">${phone}</a></div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Service Details</div>
                <div class="info-block">
                  <div class="info-label">Service Type</div>
                  <div class="info-value"><span class="badge">${serviceType}</span></div>
                </div>
                <div class="info-block">
                  <div class="info-label">Location</div>
                  <div class="info-value">${location}</div>
                </div>
              </div>

              ${
                message
                  ? `
              <div class="section">
                <div class="section-title">Additional Message</div>
                <div class="message-box">
                  <p>${message}</p>
                </div>
              </div>
              `
                  : ""
              }

              <div class="timestamp">
                <strong>Received:</strong> ${new Date().toLocaleString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZoneName: "short",
                  },
                )}
              </div>
            </div>
            <div class="footer">
              <p>📧 <strong>Action Required:</strong> Please review this lead and follow up with the customer.</p>
              <p style="margin-top: 10px; opacity: 0.8;">Pubali Enterprise - Automated Inquiry System</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email content for customer
    const customerEmailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
            .header p { margin: 10px 0 0 0; font-size: 16px; opacity: 0.95; }
            .content { background: white; padding: 30px; }
            .thank-you-box { background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); border-left: 4px solid #10b981; padding: 20px; border-radius: 6px; margin-bottom: 25px; }
            .thank-you-box p { margin: 0; color: #065f46; font-size: 15px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 14px; font-weight: 600; color: #059669; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; }
            .detail-row { display: flex; margin-bottom: 12px; }
            .detail-label { font-weight: 600; color: #059669; min-width: 130px; font-size: 13px; }
            .detail-value { color: #333; flex: 1; }
            .contact-box { background: #f0fdf4; border: 2px solid #86efac; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; }
            .contact-box p { margin: 8px 0; }
            .contact-label { font-size: 12px; color: #059669; font-weight: 600; text-transform: uppercase; }
            .contact-value { font-size: 18px; color: #10b981; font-weight: 600; text-decoration: none; }
            .next-steps { background: #f9fafb; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #10b981; }
            .next-steps h3 { margin-top: 0; color: #059669; }
            .next-steps ol { margin: 10px 0; padding-left: 20px; }
            .next-steps li { margin: 8px 0; color: #333; }
            .footer { background: #059669; color: white; padding: 25px; text-align: center; font-size: 13px; }
            .footer-link { color: #a7f3d0; text-decoration: none; }
            .footer-link:hover { text-decoration: underline; }
            .social-links { margin-top: 15px; }
            .social-links a { display: inline-block; width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 6px; text-align: center; line-height: 40px; margin: 0 5px; color: white; text-decoration: none; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Quote Request Received!</h1>
              <p>Thank you for choosing Pubali Enterprise</p>
            </div>
            <div class="content">
              <div class="thank-you-box">
                <p><strong>Hi ${name},</strong></p>
                <p>Thank you for submitting your quote request. We have successfully received your inquiry and appreciate your interest in our services. Our team will review your request and get back to you shortly.</p>
              </div>

              <div class="section">
                <div class="section-title">📋 Your Request Summary</div>
                <div class="detail-row">
                  <div class="detail-label">Service Type:</div>
                  <div class="detail-value"><strong>${serviceType}</strong></div>
                </div>
                <div class="detail-row">
                  <div class="detail-label">Location:</div>
                  <div class="detail-value">${location}</div>
                </div>
                <div class="detail-row">
                  <div class="detail-label">Contact Email:</div>
                  <div class="detail-value">${email}</div>
                </div>
                <div class="detail-row">
                  <div class="detail-label">Contact Phone:</div>
                  <div class="detail-value">${phone}</div>
                </div>
              </div>

              <div class="next-steps">
                <h3>📅 What's Next?</h3>
                <ol>
                  <li>Our team will review your request within <strong>24 hours</strong></li>
                  <li>We'll prepare a customized quote based on your requirements</li>
                  <li>You'll receive a detailed proposal with timeline and pricing</li>
                  <li>Our team will be available to discuss any questions</li>
                </ol>
              </div>

              <div class="contact-box">
                <p class="contact-label">Need Immediate Assistance?</p>
                <p class="contact-value"><a href="tel:+8801234567890">+880 1234 567890</a></p>
                <p style="font-size: 12px; color: #059669; margin-top: 10px;">Or reach us on WhatsApp</p>
              </div>

              <div class="section">
                <p style="color: #6b7280; font-size: 13px; line-height: 1.6;">
                  This is an automated confirmation email. Please do not reply to this email. If you have any questions or need to modify your request, please contact us directly using the phone number above or reply to the original inquiry form.
                </p>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;"><strong>Pubali Enterprise</strong></p>
              <p style="margin: 5px 0; opacity: 0.9;">Professional Cargo & Equipment Handling Services</p>
              <p style="margin: 5px 0; opacity: 0.8;">📞 +880 1234 567890 | 📧 <a href="mailto:info@pubalienterprises.com" class="footer-link">info@pubalienterprises.com</a></p>
              <p style="margin-top: 15px; opacity: 0.7; font-size: 12px;">© 2026 Pubali Enterprise. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: `"Pubali Enterprise" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || "info@pubalienterprises.com",
      subject: `📩 New Quote Request: ${serviceType} - ${name}`,
      html: adminEmailContent,
      replyTo: email,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Pubali Enterprise" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Quote Request Received - Pubali Enterprise",
      html: customerEmailContent,
    });

    // TODO: Send to WhatsApp (implement with Twilio or similar service)
    // You can integrate WhatsApp API here

    return NextResponse.json(
      {
        success: true,
        message:
          "Quote request submitted successfully! Check your email for confirmation.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Detailed error logging for debugging
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error code:", (error as any).code);
    }

    // Return appropriate error message
    const errorMessage =
      error instanceof Error && error.message.includes("credentials")
        ? "Email service is not configured. Please contact the administrator."
        : "Failed to submit quote request. Please try again later or contact us directly.";

    return NextResponse.json(
      {
        error: errorMessage,
        success: false,
      },
      { status: 500 },
    );
  }
}
