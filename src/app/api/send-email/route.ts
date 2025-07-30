import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {
            formType,
            firstName,
            lastName,
            companyName,
            email,
            phone,
            shipmentsPerMonth,
            mode,
            originPort,
            destinationPort,
            enquiry,
            companyEmail,
            website,
            address,
            city,
            province,
            topic,
            message,
        } = body;

        // Basic server-side validation
        if (!formType || !firstName || !lastName || !(email || companyEmail) || !phone || !companyName) {
            return NextResponse.json({message: "Required fields are missing."}, {status: 400});
        }

        // Create Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_PORT === "465",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Define email content based on form type
        let emailContent: string;
        if (formType === "freightQuote") {
            emailContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
<!--            <div style="text-align: center; margin-bottom: 20px;">-->
<!--              <img src="/Logo-Nexus.png" alt="Nexus Logix Logo"  style="max-width: 150px; height: auto;">-->
<!--            </div>-->
            <h2 style="color: #162F65; text-align: center;">New Freight Quote Request</h2>
            <p style="color: #f9f9f9">Dear Admin,</p>
            <p style="color: #f9f9f9">You have received a new freight quote request from Nexus Logix website. Below are the details:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>First Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${firstName}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Last Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${lastName}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Company Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${companyName}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Shipments per Month:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${shipmentsPerMonth || "N/A"}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Mode:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${mode || "N/A"}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Origin:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${originPort || "N/A"}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Destination:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${destinationPort || "N/A"}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Enquiry:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${enquiry || "N/A"}</td></tr>
            </table>
            <p style="margin-top: 30px; text-align: center; font-size: 0.9em; color: #777;">
              This email was sent automatically from the Nexus Logix website contact form. Please do not reply to this email.
            </p>
          </div>
        </div>
      `;
        } else if (formType === "contactUs") {
            emailContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
<!--            <div style="text-align: center; margin-bottom: 20px;">-->
<!--              <img src="/Logo-Nexus.png" alt="Nexus Logix Logo"  style="max-width: 150px; height: auto;">-->
<!--            </div>-->
            <h2 style="color: #162F65; text-align: center;">New Contact Us Submission</h2>
            <p style="color: #f9f9f9">Dear Admin,</p>
            <p style="color: #f9f9f9">You have received a new contact submission from Nexus Logix website. Below are the details:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>First Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${firstName}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Last Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${lastName}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Company Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${companyName}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${companyEmail}">${companyEmail}</a></td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Website:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${website || "N/A"}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Address:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${address || "N/A"}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>City:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${city || "N/A"}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>State:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${province || "N/A"}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Topic:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${topic || "N/A"}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Message:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message || "N/A"}</td></tr>
            </table>
            <p style="margin-top: 30px; text-align: center; font-size: 0.9em; color: #777;">
              This email was sent automatically from the Nexus Logix website contact form. Please do not reply to this email.
            </p>
          </div>
        </div>
      `;
        } else {
            return NextResponse.json({message: "Invalid form type."}, {status: 400});
        }

        // Send email
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.ADMIN_EMAIL,
            subject: formType === "freightQuote" ? "New Freight Quote Request from Website" : "New Contact Us Submission from Website",
            html: emailContent,
        });

        return NextResponse.json({message: "Email sent successfully!"}, {status: 200});
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            {message: "Failed to send email.", error: (error as Error).message},
            {status: 500}
        );
    }
}