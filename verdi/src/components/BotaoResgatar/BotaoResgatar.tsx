"use client"
export default function BotaoResgatar(props:{idUsuario:string , idRecompensa:number}) {
    const pessoa_id = props.idUsuario;
    const recompensa_id = props.idRecompensa

    const handleResgatar = async () => {
        try {
          const response = await fetch(`http://localhost:5000/resgatar`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pessoa_id, recompensa_id }),
          });
          if (response.ok) {  
            console.log("Usuário conectado com sucesso");
          } else {
            console.error("Erro ao fazer o login");
          }
        } catch (error) {
          console.error("Falha no carregamento", error);
        }
      }

  return (
    <button onClick={handleResgatar}>Resgatar</button>
  )
}
