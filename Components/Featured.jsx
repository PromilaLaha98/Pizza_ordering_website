import Image from "next/image";
import styles from "../styles/Featured.module.css";
import { useState } from "react";

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/featured1.png",
        "/img/featured2.png",
        "/img/featured3.png",
      ];

      const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
  
  return (
    
    <div className={styles.container}>
        <div className={styles.arrowContainer}  style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image className={styles.img1} src="/img/arrowl.png" alt="" height="100" width="100"  />
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image className={styles.img2} src={img} alt="" height="500" width="500"  />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer}  style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image className={styles.img1} src="/img/arrowr.png" alt="" height="100" width="100" />
      </div>
    </div>
  );
};

export default Featured;