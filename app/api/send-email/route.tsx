import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";

interface EmailData {
  email: string;
  subject: string;
  message: string;
}

// Function to generate HTML content for the email
function generateEmailContent(data: EmailData) {
  const styles = `
  /* Define styles for the categories */
  // .result-category {
  //   margin-bottom: 10px;
  // }
  .section {
    margin-bottom: 25px;
  }
  .category {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

  const emailLink = `mailto:${data.email}`;

  // mail content for coach center
  const htmlReci = render(
    <html>
      <head>
        <style>{styles}</style>
      </head>
      <body>
      </body>
      <body>
        <div>
          <div className="section">
            <h2>Potentiële klant</h2>
          </div>
          <div className="section">
            <p>
              Beste réciproque,</p>
            <p>Via de portfolio site is een vraag binnengekomen.</p>
            <p><u><strong>Dit zijn de contactgegevens van de kandidaat:</strong></u></p>
            <p><strong>E-mail:</strong> {data.email}</p>
            <p><strong>Subject:</strong> {data.subject}</p>
            <p><strong>Message:</strong> {data.message}</p>
          </div>
        </div>
      </body>
    </html>
  );

  const htmlCustomer = render(
    <html>
      <head>
        <style>{styles}</style>
      </head>
      <body>
      </body>
      <body>
        <div>
          <div className="section">
            <h2>Your message has been received well.</h2>
          </div>
          <div className="section">
            <p>
              Hi there,</p>
            <p>
              Thank you for your interest in réciproque.
              We will contact you as soon as possible.
            </p>
          </div>
          <div className="section">
            <p>
              This is your request:
            </p>
            <p>
              <strong>Subject: </strong>
              <p>
                <i>{data.subject}</i>
              </p>
            </p>
            <p>
              <strong>Message: </strong>
              <p>
                <i>{data.message}</i>
              </p>
            </p>
          </div>
          <div className="section">
            <p><u><strong>réciproque</strong></u></p>
            <p>info@reciproque.eu</p>
            <p>+32 499 167 510</p>
          </div>

        </div>
      </body>
    </html>
  );
  return { htmlReci, htmlCustomer };
}


// Function to send emails
async function sendEmail(data: EmailData) {
  const { htmlReci } = generateEmailContent(data);
  const { htmlCustomer } = generateEmailContent(data);

  const smtpOptions = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  };

  // send the mail
  const transporter = nodemailer.createTransport(smtpOptions);

  try {
    // Verify connection configuration
    await transporter.verify();
    console.log("Server is ready to take our messages");

    const mailDataCoach = {
      from: {
        name: `Portfolio site`,
        address: "info@reciproque.be",
      },
      replyTo: "",
      to: ["reci.reciproque@gmail.com"],
      subject: "Contact portfolio site",
      html: htmlReci,
    };

    const mailDataClient = {
      from: {
        name: `réciproque`,
        address: "info@reciproque.be",
      },
      replyTo: "",
      to: [data.email], // Use the client's email from the received data
      subject: "Contact réciproque",
      html: htmlCustomer,
    };

    // Send mail
    await Promise.all([
      transporter.sendMail(mailDataCoach),
      transporter.sendMail(mailDataClient),
    ]);
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    // return { statusCode: 500, body: JSON.stringify({ message: "Email could not be sent" }) };
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data: EmailData = await req.json();

    // await sendEmail(data);
    const emailResult = await sendEmail(data);
    return NextResponse.json({ message: emailResult }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.error();
  }
}

