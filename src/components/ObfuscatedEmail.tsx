import React, { useState, useEffect } from "react";

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
}

export default function ObfuscatedEmail({ user, domain, className }: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Construct the email only on the client side
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  if (!email) {
    // Render a placeholder or nothing while loading
    return <span className={className}>...</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
