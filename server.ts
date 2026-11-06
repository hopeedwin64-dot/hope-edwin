import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// SMTP configuration with fallbacks
const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = Number(process.env.SMTP_PORT) || 465;
const smtpUser = process.env.SMTP_USER || 'patriciaslyvia005@gmail.com';
// Clean app password of any spaces if present
const smtpPass = (process.env.SMTP_PASS || 'ejon bffm uyiy bulj').replace(/\s+/g, '');
const isSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
const contactEmail = process.env.CONTACT_EMAIL || 'patriciaslyvia005@gmail.com';
const fromEmail = process.env.SMTP_FROM_EMAIL || 'patriciaslyvia005@gmail.com';
const fromName = process.env.SMTP_FROM_NAME || 'Patricia Slyvia - Portfolio Enquiries';

// Transporter instance
const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: isSecure,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

// Verify connection configuration on startup (non-blocking)
transporter.verify((error) => {
  if (error) {
    console.warn('[SMTP Warning] Failed to connect to SMTP server:', error.message);
  } else {
    console.log('[SMTP Ready] Server is configured and ready to send emails.');
  }
});

// Helper to escape HTML characters
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// API endpoint for form submissions
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { fullName, email, serviceNeeded, projectDetails } = req.body;

    if (!fullName || !email || !serviceNeeded || !projectDetails) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (name, email, service, and details).',
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    const safeName = escapeHtml(fullName.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeService = escapeHtml(serviceNeeded.trim());
    const safeDetails = escapeHtml(projectDetails.trim()).replace(/\n/g, '<br />');

    const submittedAt = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // Customized HTML Email Template for Patricia
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f1f5f9;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
    }
    .wrapper {
      width: 100%;
      background-color: #f1f5f9;
      padding: 30px 15px;
      box-sizing: border-box;
    }
    .card {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
    }
    .header {
      background-color: #0a192f;
      padding: 28px 24px;
      text-align: center;
      border-bottom: 3px solid #d4af37;
    }
    .header h1 {
      margin: 0 0 6px 0;
      color: #ffffff;
      font-size: 20px;
      letter-spacing: -0.5px;
    }
    .badge {
      display: inline-block;
      background-color: rgba(212, 175, 55, 0.18);
      color: #d4af37;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .body-content {
      padding: 28px 24px;
    }
    .intro {
      font-size: 15px;
      line-height: 1.5;
      color: #334155;
      margin-bottom: 22px;
    }
    .details-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
      background-color: #f8fafc;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
    }
    .details-table td {
      padding: 12px 16px;
      font-size: 14px;
      border-bottom: 1px solid #e2e8f0;
    }
    .details-table tr:last-child td {
      border-bottom: none;
    }
    .label {
      font-weight: 600;
      color: #64748b;
      width: 140px;
    }
    .value {
      color: #0a192f;
      font-weight: 500;
    }
    .service-highlight {
      display: inline-block;
      background-color: #0a192f;
      color: #d4af37;
      padding: 3px 10px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 13px;
    }
    .message-box {
      background-color: #f8fafc;
      border-left: 4px solid #d4af37;
      padding: 16px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 24px;
    }
    .message-box h3 {
      margin: 0 0 8px 0;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #64748b;
    }
    .message-text {
      font-size: 14px;
      line-height: 1.6;
      color: #1e293b;
      margin: 0;
    }
    .cta-container {
      text-align: center;
      margin-top: 26px;
    }
    .cta-button {
      display: inline-block;
      background-color: #d4af37;
      color: #0a192f !important;
      text-decoration: none;
      font-weight: 700;
      font-size: 14px;
      padding: 12px 28px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(212, 175, 55, 0.35);
    }
    .footer {
      background-color: #f8fafc;
      padding: 18px 24px;
      text-align: center;
      border-top: 1px solid #e2e8f0;
      font-size: 12px;
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <span class="badge">New Skool Community Inquiry</span>
        <h1>Patricia Slyvia · Portfolio Notification</h1>
      </div>
      <div class="body-content">
        <p class="intro">
          You have received a new project enquiry through your portfolio website. Here are the client's details:
        </p>

        <table class="details-table">
          <tr>
            <td class="label">Client Name:</td>
            <td class="value">${safeName}</td>
          </tr>
          <tr>
            <td class="label">Email Address:</td>
            <td class="value"><a href="mailto:${safeEmail}" style="color: #0284c7; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td class="label">Service Needed:</td>
            <td class="value"><span class="service-highlight">${safeService}</span></td>
          </tr>
          <tr>
            <td class="label">Submission Date:</td>
            <td class="value" style="font-size: 12px; color: #64748b;">${submittedAt} (UTC)</td>
          </tr>
        </table>

        <div class="message-box">
          <h3>Project Details & Requirements:</h3>
          <p class="message-text">${safeDetails}</p>
        </div>

        <div class="cta-container">
          <a href="mailto:${safeEmail}?subject=Re: Your Skool Community Project (${safeService})&body=Hi ${safeName},%0D%0A%0D%0AThank you for reaching out through my portfolio website regarding your ${safeService} project.%0D%0A%0D%0A" class="cta-button">
            Reply to ${safeName}
          </a>
        </div>
      </div>
      <div class="footer">
        Automated delivery from Patricia Slyvia Portfolio Website · Powered by Google Cloud Run & SMTP
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // Plain text alternative
    const emailText = `
New Skool Community Project Inquiry:

Client Name: ${fullName}
Client Email: ${email}
Service Needed: ${serviceNeeded}
Submitted At: ${submittedAt} (UTC)

Project Details:
${projectDetails}

---
To reply, write to ${email}
    `.trim();

    // Send the email
    const mailOptions = {
      from: `"${fromName}" <${fromEmail}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New Inquiry from ${fullName} - ${serviceNeeded}`,
      text: emailText,
      html: emailHtml,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Email Sent] Message sent successfully to ${contactEmail}: ${info.messageId}`);

    return res.status(200).json({
      success: true,
      message: 'Your enquiry has been successfully delivered. Patricia will get back to you shortly!',
    });
  } catch (error: any) {
    console.error('[Email Error] Failed to send contact enquiry:', error);
    let userFriendlyMessage = 'Unable to send message right now. Please try again or use direct email.';
    if (error?.message && error.message.includes('BadCredentials')) {
      userFriendlyMessage = 'Email service is updating credentials. Please click the button below to send your enquiry directly via your email app.';
    }
    return res.status(500).json({
      success: false,
      error: userFriendlyMessage,
    });
  }
});

// Setup Vite middlewares for dev or static files for production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    // Development mode with Vite middleware
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: {
        middlewareMode: true,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} (${isProduction ? 'production' : 'development'})`);
  });
}

startServer();
