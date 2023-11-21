// import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
const baseURL = process.env.BASE_URL 

export const options = {
    providers: [
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET,
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    theme: {
        colorScheme: "light", // "auto" | "dark" | "light"
        brandColor: "#2F2E2E", // Hex color code
        logo: "", // Absolute URL to image
        buttonText: "" // Hex color code
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            // console.log("user", user, "account", account, "profile", profile);
            const newUser = {
                name: user.name,
                email: user.email,
                image: user.image,
                oAuthId: user.id,
              };
              const response = await fetch(`${baseURL}/user/`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
              });
              const data = await response.json();
            //   console.log(data);
              return true;
        },
        async session({ session }) {
            const response = await fetch(`${baseURL}/user/email/${session.user.email}`, { method: 'GET' });
              const data = await response.json();
              session.user._id = data[0]._id;
              session.user.downloads = data[0].downloads;
              session.user.rating = data[0].rating;
              session.user.creator = data[0].creator;
            return session
        }
    }
} 