<?php

namespace App\Mail;

use App\Models\QuotationRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class QuotationSubmittedMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public QuotationRequest $quotation) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "[Jadeer United] New Quotation {$this->quotation->reference_code} — {$this->quotation->country}",
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.quotation-submitted',
        );
    }
}
