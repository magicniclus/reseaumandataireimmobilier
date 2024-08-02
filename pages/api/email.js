/* eslint-disable import/no-anonymous-default-export */
import { EmailTemplate } from "@/components/email/EmailTemplate";
import sgMail from "@sendgrid/mail";
import ReactDOMServer from "react-dom/server"; // Assurez-vous d'avoir react-dom installé

// Configurez SendGrid avec votre clé API
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    const { nom, codePostal, telephone, email, type } = req.body;

    const emailContent = ReactDOMServer.renderToString(
      <EmailTemplate
        nom={nom}
        codePostal={codePostal}
        telephone={telephone}
        email={email}
        type={type}
      />
    );

    const msg = {
      to: "casteranicolas.contact@gmail.com", // Assurez-vous que cette adresse est valide
      from: "nouveaucontact@prospect-manager.fr",
      subject: "Nouveau prospect du site: Reseau-Mandataire-Immobilier.com",
      html: emailContent,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Email envoyé avec succès" });
    } catch (error) {
      console.error("Erreur SendGrid:", error.response?.body);
      res.status(400).json({
        message: "Erreur lors de l'envoi de l'email.",
        details: error.response?.body,
      });
      return;
    }
  } catch (error) {
    res.status(400).json({ message: error.message, stack: error.stack });
  }
};
