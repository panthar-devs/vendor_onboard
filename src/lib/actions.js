"use server"
import nodemailer from "nodemailer"


export const sendMail = async ({ data }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const starCount = parseInt(data.platformRating || '0');
    const stars = '★ '.repeat(starCount) + '☆ '.repeat(5 - starCount);

    const htmlBody = `
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background-color: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
          border-top: 6px solid #00aa78;
        }
        .header {
          background-color: #00aa78;
          color: #fff;
          padding: 20px 30px;
          font-size: 24px;
          font-weight: bold;
        }
        .content {
          padding: 30px;
        }
        .section {
          margin-bottom: 20px;
        }
        .section-title {
          font-size: 16px;
          font-weight: bold;
          color: #00aa78;
          margin-bottom: 8px;
        }
        .label {
          font-weight: bold;
        }
        .value {
          margin-left: 5px;
        }
        .highlight-box {
          background-color: #f1fdf8;
          border-left: 4px solid #00aa78;
          padding: 12px 16px;
          margin-bottom: 15px;
          border-radius: 4px;
          font-size: 14px;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #888;
          padding: 20px;
          border-top: 1px solid #eee;
        }
        .stars {
          color: gold;
          font-size: 20px;
          letter-spacing: 3px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">Vendor Registration — FrameFinder</div>
        <div class="content">
          <div class="section">
            <div class="section-title">Vendor Details</div>
            <p><span class="label">GST Registration:</span><span class="value">${data.gstRegistration}</span></p>
            ${data.gstNumber ? `<p><span class="label">GST Number:</span><span class="value">${data.gstNumber}</span></p>` : ''}
            <p><span class="label">Business Name:</span><span class="value">${data.businessName}</span></p>
            <p><span class="label">Business Type:</span><span class="value">${data.businessType}</span></p>
            <p><span class="label">Store Address:</span><span class="value">${data.addressLine1}, ${data.city}, ${data.state} - ${data.pincode}</span></p>
          </div>

          <div class="section">
            <div class="section-title">Contact Person</div>
            <p><span class="label">Full Name:</span><span class="value">${data.fullName}</span></p>
            <p><span class="label">Role:</span><span class="value">${data.designation}</span></p>
            <p><span class="label">Email:</span><span class="value">${data.emailAddress}</span></p>
            <p><span class="label">Phone Number:</span><span class="value">${data.phoneNumber}</span></p>
          </div>

          <div class="section">
            <div class="section-title">Product Information</div>
            <p><span class="label">Category:</span><span class="value">${data.productCategory}</span></p>
            <p><span class="label">Online Presence (Website):</span><span class="value">${data.onlinePresenceWebsite}</span></p>
            <p><span class="label">Instagram:</span><span class="value">${data.onlinePresenceInstagram}</span></p>
            <p><span class="label">Marketplace:</span><span class="value">${data.onlinePresenceMarketplace}</span></p>
          </div>

          <div class="section">
            <div class="section-title">Why Join FrameFinder?</div>
            <div class="highlight-box">✅ Zero onboarding fee during the pre-launch phase</div>
            <div class="highlight-box">📣 Early access to promotions and marketing support</div>
            <div class="highlight-box">📦 Dedicated dashboard to manage products and orders</div>
            <div class="highlight-box">👓 Customer base focused purely on eyewear</div>
            <div class="highlight-box">🚚 Sell your product to Pan-India</div>
          </div>

          <div class="section">
            <div class="section-title">How Much Do You Like This New Startup Ecommerce Platform?</div>
            <div class="stars">${stars.trim()}</div>
          </div>
        </div>

        <div class="footer">
          © 2025 FrameFinder. All rights reserved.
        </div>
      </div>
    </body>
  </html>
    `

    const mailConfig = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Frame Finder Vendor Onboarding - Application `,
      html: htmlBody
    };

    await transporter.sendMail(mailConfig);

    return { message: "Onboarding mail send successfully!", status: "SUCCESS" }

  } catch (error) {
    console.error("Error while sending mail ==> ", error)
    return { message: "Error while sending mail!", status: "ERROR" }
  }
}

export const sendUserMail = async ({ data }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlBody = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f8f9fa;
        margin: 0;
        padding: 0;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
        overflow: hidden;
        border-top: 6px solid #00aa78;
      }
      .header {
        background-color: #00aa78;
        color: #ffffff;
        padding: 24px 30px;
        font-size: 22px;
        font-weight: bold;
      }
      .content {
        padding: 30px;
        line-height: 1.6;
      }
      .highlight-box {
        background-color: #f1fdf8;
        border-left: 4px solid #00aa78;
        padding: 12px 16px;
        margin: 20px 0;
        border-radius: 4px;
        font-size: 14px;
      }
      .cta-button {
        display: inline-block;
        background-color: #00aa78;
        color: #ffffff;
        padding: 12px 20px;
        border-radius: 4px;
        text-decoration: none;
        margin-top: 20px;
        font-weight: bold;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #888;
        padding: 20px;
        border-top: 1px solid #eee;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Welcome to FrameFinder, Vendor Partner!</div>
      <div class="content">
        <p>Hi <strong>${data.fullName}</strong>,</p>

        <p>
          Thank you for registering with <strong>FrameFinder</strong> as a vendor!
          We’re thrilled to have <strong>${data.businessName}</strong> onboard and can’t wait to
          help you reach more customers across India.
        </p>

        <div class="highlight-box">
          ✅ Your onboarding form has been received and is currently under review.  
          You’ll be notified via email once your vendor dashboard is activated.
        </div>

        <p>
          Let’s make eyewear more accessible together!
        </p>


        <p style="margin-top: 30px;">With appreciation, <br />The FrameFinder Team</p>
      </div>

      <div class="footer">
        © 2025 FrameFinder. All rights reserved. <br />
        This is an automated message. Please do not reply directly to this email.
      </div>
    </div>
  </body>
</html>

    `

    const mailConfig = {
      from: process.env.EMAIL_USER,
      to: data.emailAddress,
      subject: `Frame Finder Vendor Onboarding - Application `,
      html: htmlBody
    };

    await transporter.sendMail(mailConfig);

    return { message: "User Onboarding mail send successfully!", status: "SUCCESS" }

  } catch (error) {
    console.error("Error while sending user mail to user ==> ", error)
    return { message: "Error while sending mail to user!!!", status: "ERROR" }
  }
}