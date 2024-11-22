"use client";

import { supabase } from "@/lib/supabaseClient";

const LogoutButton = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      console.log("Logged out successfully!");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
