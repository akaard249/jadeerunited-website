<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Jadeer United — Corporate Leasing & GCC Mobility')</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-[#F8F8F6] text-[#1B1F1A] antialiased min-h-screen flex flex-col">
    <header class="sticky top-0 z-40 bg-[#F8F8F6]/95 border-b border-[#E3E5E0]">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
            <a href="{{ route('home') }}" class="font-bold text-lg tracking-tight whitespace-nowrap shrink-0">
                Jadeer United
            </a>
            <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-[#4D544C]">
                <a href="{{ route('showroom.index') }}" class="hover:text-[#1B1F1A] whitespace-nowrap">Showroom</a>
                <a href="{{ route('used-cars.index') }}" class="hover:text-[#1B1F1A] whitespace-nowrap">Used Cars</a>
                <a href="{{ route('offers.index') }}" class="hover:text-[#1B1F1A] whitespace-nowrap">Offers</a>
                <a href="{{ route('about') }}" class="hover:text-[#1B1F1A] whitespace-nowrap">About</a>
                <a href="{{ route('contact.index') }}" class="hover:text-[#1B1F1A] whitespace-nowrap">Contact</a>
            </nav>
            <a href="{{ route('quotation.create') }}"
               class="px-4 py-2 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] rounded-md whitespace-nowrap shrink-0">
                Request Quote
            </a>
        </div>
    </header>

    <main class="flex-1">
        @yield('content')
    </main>

    <footer class="bg-[#282F27] text-[#E6E5DF] py-12 border-t border-[#3A4338]">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-sm">
            <div>
                <div class="font-bold text-white">Jadeer United Leasing &amp; Motors</div>
                <p class="mt-1 text-xs text-[#C8CBC4]">Bahrain (Amwaj HQ) · Saudi Arabia (Khobar) · Oman (Muscat)</p>
                <p class="mt-1 text-xs text-[#B5A486] italic">"Success is never owned, is leased and the rent is due Every day."</p>
            </div>
            <div class="text-xs text-[#C8CBC4] space-y-1">
                <div>Sales: sales@jadeergulf.com · Support: Maisara@jadeergulf.com · Info: info@jadeergulf.com</div>
                <div>Sun–Thu: 8:30 AM – 5:30 PM | Fri: Closed | Sat: 9:00 AM – 1:00 PM</div>
            </div>
        </div>
    </footer>
</body>
</html>
