# Jadeer United — Laravel 12 / PHP 8.2+ Application

Complete production-structured Laravel 12 source package for **Jadeer United Leasing & Jadeer United Motors** (`www.jadeerunited.com`), serving Bahrain (Amwaj HQ), Saudi Arabia (Khobar), and Oman (Muscat).

## Requirements
- PHP 8.2+ (`pdo_mysql` or `pdo_sqlite`, `mbstring`, `fileinfo`, `openssl`)
- Composer 2.x
- Node.js 20+ & npm (for Tailwind CSS / Vite asset compilation)
- MySQL 8.0+ or SQLite

## Setup & Installation

```bash
# 1. Install PHP and frontend dependencies
composer install
npm install

# 2. Configure environment
cp .env.example .env
php artisan key:generate
```

Configure database and email settings in `.env`:

```env
APP_NAME="Jadeer United"
APP_URL=https://www.jadeerunited.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=jadeer_united
DB_USERNAME=root
DB_PASSWORD=

# Or use SQLite:
# DB_CONNECTION=sqlite

MAIL_MAILER=smtp
MAIL_FROM_ADDRESS="no-reply@jadeerunited.com"
MAIL_FROM_NAME="Jadeer United"

JADEER_SALES_EMAIL="sales@jadeergulf.com"
JADEER_SUPPORT_EMAIL="Maisara@jadeergulf.com"
JADEER_GENERAL_EMAIL="info@jadeergulf.com"
```

Run migrations, seed sample fleet/offers/articles/quotations, and link public storage:

```bash
php artisan migrate --seed
php artisan storage:link
npm run build
php artisan serve
```

## Creating an Administrator Account

The `/admin` routes are protected by both `auth` and `EnsureUserIsAdmin` (`is_admin = true`) middleware. Register middleware alias `'admin' => \App\Http\Middleware\EnsureUserIsAdmin::class` in `bootstrap/app.php`.

Create your production admin user via Tinker:

```bash
php artisan tinker
```

```php
\App\Models\User::create([
    'name' => 'Jadeer Fleet Admin',
    'email' => 'admin@jadeerunited.com',
    'password' => \Illuminate\Support\Facades\Hash::make('ReplaceWithStrongPassword!'),
    'is_admin' => true,
]);
```

## Route Structure
- **Public**: `/`, `/about`, `/showroom`, `/showroom/{vehicle}`, `/used-cars`, `/used-cars/{vehicle}`, `/offers`, `/articles`, `/articles/{slug}`, `/quotation` (`GET`/`POST`), `/contact` (`GET`/`POST`)
- **Protected Admin (`/admin`)**:
  - `GET /admin` — Dashboard KPIs & recent quotations
  - `Resource /admin/vehicles` — Full CRUD for Showroom & Used Cars with image upload to `storage/app/public/vehicles`, quick status & featured toggles
  - `GET/PATCH/DELETE /admin/quotations` — Filterable quotation inbox, quote estimation, status lifecycle (`new`, `in_review`, `quoted`, `approved`, `rejected`, `closed`), and spam cleanup
