import style from "../styles/style.module.css";

function actionBtn() {
  alert("Compra realizada com sucesso!");
}

export default function Description() {
  return (
    <div>
      <h1>Pôster: Star Wars (1977)</h1>
      <p className={style.pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam
        dignissimos molestiae exercitationem dolor voluptatibus laudantium
        commodi ab! Nisi eligendi dolorum minima eaque in doloribus est tempore
        cumque! Sint perspiciatis doloribus totam, labore provident repellat
        reiciendis amet placeat? Quo quibusdam provident accusantium, nisi nihil
        voluptates.
      </p>
      <button type="button" className={style.btnStyle} onClick={actionBtn}>
        Comprar agora
      </button>
    </div>
  );
}
