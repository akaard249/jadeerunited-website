<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Jadeer United — Corporate Leasing & GCC Mobility')</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-[#0B0B0D] text-[#F5F5F4] antialiased min-h-screen flex flex-col selection:bg-[#C8A45D] selection:text-[#0B0B0D]">
    <header class="sticky top-0 z-40 bg-[#0B0B0D]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
            <a href="{{ route('home') }}" class="font-bold text-lg tracking-tight text-white whitespace-nowrap shrink-0">
                Jadeer United
            </a>
            <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-[#9A9AA3]">
                <a href="{{ route('showroom.index') }}" class="hover:text-white whitespace-nowrap transition-colors">Showroom</a>
                <a href="{{ route('used-cars.index') }}" class="hover:text-white whitespace-nowrap transition-colors">Used Cars</a>
                <a href="{{ route('offers.index') }}" class="hover:text-white whitespace-nowrap transition-colors">Offers</a>
                <a href="{{ route('about') }}" class="hover:text-white whitespace-nowrap transition-colors">About</a>
                <a href="{{ route('contact.index') }}" class="hover:text-white whitespace-nowrap transition-colors">Contact</a>
            </nav>
            <a href="{{ route('quotation.create') }}"
               class="px-4 py-2 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-md whitespace-nowrap shrink-0 transition-colors">
                Request Quote
            </a>
        </div>
    </header>

    <main class="flex-1">
        @yield('content')
    </main>

    <footer class="bg-[#08080A] text-[#C8C8D0] py-12 border-t border-white/[0.08]">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-sm">
            <div>
                <div class="font-bold text-white">Jadeer United Motors</div>
                <p class="mt-1 text-xs text-[#9A9AA3]">Bahrain (Amwaj HQ) · Saudi Arabia (Khobar) · Oman (Muscat)</p>
                <p class="mt-1 text-xs text-[#C8A45D] italic">"Success is never owned, is leased and the rent is due Every day."</p>
            </div>
            <div class="text-xs text-[#9A9AA3] space-y-1">
                <div>Sales: sales@jadeergulf.com · Support: Maisara@jadeergulf.com · Info: info@jadeergulf.com</div>
                <div>Sun–Thu: 8:30 AM – 5:30 PM | Fri: Closed | Sat: 9:00 AM – 1:00 PM</div>
            </div>
        </div>
    </footer>
</body>
</html>
