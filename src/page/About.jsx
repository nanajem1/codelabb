import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import labImage from "../Images/lab.jpg";
import milabImage from "../Images/milab.png";
import labitImage from "../Images/labit.png";
import "../Style/Style.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <img src={labImage} alt="Lab Informatika UMM" />
          <img src={milabImage} alt="MI Lab UMM" />
          <img src={labImage} alt="Lab Informatika UMM" />
          <img src={labitImage} alt="Labit UMM" />
          <img src={labImage} alt="Lab Informatika UMM" />
        </div>
      </div>

      <div className="text-container">
        <h2>Welcome to "Lab Informatika UMM"</h2>
        <p>
          Laboratorium Teknik Informatika berfungsi sebagai pusat pembelajaran
          praktis dan eksperimental yang dipergunakan oleh mahasiswa dan
          pelayanan untuk riset dan konsultasi keteknikan mencakup desain
          perangkat lunak untuk animasi, administrasi, grafis, dll.
        </p>
      </div>
      <h3>Laboratorium Rekayasa Perangkat Lunak</h3>
      <p>
        Melakukan analisis kelayakan pembuatan, penerapan proyek perangkat
        lunak, analisis kebutuhan, perancangan, pembuatan, dan penjaminan
        kualitas perangkat lunak serta melakukan rekayasa ulang perangkat lunak.
      </p>
      <h3>Laboratorium Sistem dan Keamanan Jaringan</h3>
      <p>
        Menganalisis permasalahan, memberikan solusi berupa perancangan,
        pembuatan, dan pengelolaan, serta melakukan evaluasi pada sistem
        jaringan.
      </p>
      <h3>Laboratorium Game Cerdas</h3>
      <p>
        Bekerja dengan tim mengembangkan dan merancang video game.
        Mengkoordinasikan tugas kompleks menciptakan video game baru yang
        memiliki tugas seperti merancang karakter, level, teka-teki, seni, dan
        animasi. Software Engineer, Programmer, atau Computer Scientist yang
        terutama mengembangkan basis kode untuk video game atau perangkat lunak
        terkait, seperti alat-alat pengembangan game.
      </p>
      <h3>Laboratorium Sains Data</h3>
      <p>
        Menganalisis dan mengolah data menjadi suatu informasi dan pengetahuan.
      </p>
      
      <Footer />
    </>
  );
};

export default About;
