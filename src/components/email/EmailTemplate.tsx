/* eslint-disable @next/next/no-img-element */
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import * as React from "react";

// Définition de l'interface pour les props
interface EmailTemplateProps {
  nom: string;
  codePostal: string;
  email: string;
  telephone: string;
  experience: string;
}

// Ajout du formatage pour inclure l'heure
const currentDate = format(new Date(), "dd/MM/yyyy HH:mm", { locale: fr });

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  nom,
  codePostal,
  telephone,
  email,
  experience,
}) => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      border: "1px solid #e3e3e3",
      maxWidth: "600px",
      margin: "20px auto",
    },
    header: {
      color: "#164e63",
      borderBottom: "2px solid #164e63",
      paddingBottom: "10px",
    },
    subHeader: {
      fontWeight: "bold",
      color: "#333",
    },
    paragraph: {
      color: "#666",
    },
    signature: {
      paddingTop: "20px",
      borderTop: "1px solid #ddd",
      marginTop: "20px",
      textAlign: "center",
    },
    signatureText: {
      color: "#444",
      fontSize: "12px",
      lineHeight: "18px",
    },
    logo: {
      height: "50px", // Hauteur du logo
      width: "auto", // Largeur ajustée automatiquement pour maintenir l'aspect ratio
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      Date: {currentDate} <br />
      Nom : {nom} <br />
      Code postal : {codePostal} <br />
      Téléphone : {telephone} <br />
      Email : {email} <br />
      experience : {experience} <br />
      Origine: reseau-mandataire-immobilier.fr
      {/* Signature Section */}
      <div style={styles.signature as React.CSSProperties}>
        <img
          src="/logo.png"
          alt="reseau-mandataire-immobilier"
          style={styles.logo}
        />
        <p style={styles.signatureText}>
          Email :{" "}
          <a href="mailto:reseau-mandataire-immobilier">
            contact@reseau-mandataire-immoiblier.fr
          </a>{" "}
          <br />
          {/* Téléphone : <a href="tel:0956342341">0956342341</a> */}
        </p>
      </div>
    </div>
  );
};
