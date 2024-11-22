"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabaseClient";

const LoginPage = () => {
  return (
    <div style={{ maxWidth: "420px", margin: "96px auto" }}>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark" // Choose 'light' or 'dark' theme
        providers={["google", "github"]} // Optional: Add OAuth providers
      />
    </div>
  );
};

export default LoginPage;
