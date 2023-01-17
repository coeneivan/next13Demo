import Image from "next/image";
import React from "react";
import whoWeAreImage from "../../images/WhoWeAre.png";

export default function WhoWeAre({}: {}) {
  return (
    <div id="whoWeAre" className="container flex gap-8">
      <div className="flex w-2/3">
        <Image src={whoWeAreImage} height={1007} width={1000} alt={"This is who we are"}/>
      </div>
      <div className="flex w-1/3 flex-col justify-center">
        <h2 className="headingTitle">
          Dit is <b>Wie</b> <br />
          we zijn
        </h2>
        <p>
          Wij zijn een digitaal bureau gespecialiseerd in ontwerp,
          webontwikkeling, mobiele appontwikkeling en online marketing. Ons team
          van ervaren professionals staat klaar om uw merk naar een hoger niveau
          te tillen met creatieve en effectieve oplossingen. Of het nu gaat om
          het ontwerpen van een logo, het bouwen van een op maat gemaakte
          website, of het lanceren van een succesvolle online marketingcampagne,
          wij hebben de kennis en het expertise om u te helpen uw doelen te
          bereiken.
        </p>
        <div className="py-8">
          <a href="" className="ctaBtn">Contacteer ons nu</a>
        </div>
      </div>
    </div>
  );
}
