import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  id: string;
  name: string;
  email: string;
}

const handler = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials) {
          return null;
        }

        try {
          const response = await fetch("https://python-verdi-deploy.vercel.app/auth", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              senha: credentials.password,
            }),
          });

          const data = await response.json();

          if (data.success) {
            return {
              id: data.id,
              name: data.nome,
              email: credentials.email,
            };
            
          }
          return null;
        } catch (error) {
          console.error("Erro durante a autorização:", error);
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
