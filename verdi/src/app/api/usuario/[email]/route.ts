// Exportando a função como 'getUserInfo'
export async function getUserInfo(email: string) {
    try {
      if (!email) {
        throw new Error("Email não fornecido");
      }
      const response = await fetch(`http://127.0.0.1:5000/infos/${email}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Erro ao obter informações do usuário");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      throw error;
    }
  }
  