function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#e2e8f0] dark:border-[#27272a] mt-16">
      <div className="max-w-4xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 text-center sm:text-left">
        <p className="text-xs text-[#94a3b8] dark:text-[#71717a]">
          © {year} SocialApp. All rights reserved.
        </p>
        <p className="text-xs text-[#94a3b8] dark:text-[#71717a]">
          Built with care, for sharing moments.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
