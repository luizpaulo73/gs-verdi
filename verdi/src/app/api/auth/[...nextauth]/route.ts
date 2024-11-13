import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    pages: {
        signIn: "/login"
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            if (!credentials) {
                return null
            }
            if(credentials.email === "luiz.paulo2005@hotmail.com" && credentials.password === "12345678") {
                return {
                    id: "1",
                    name: "Plim",
                    email: "luiz.paulo2005@hotmail.com"
                } 
            }
            return null
          }
        })
      ]
})

export { handler as GET , handler as POST}