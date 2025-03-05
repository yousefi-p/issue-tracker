import sql from '@/lib/db';
import { NextResponse } from 'next/server';

function GetRandomCode() {
  const code = Math.floor(100000 + Math.random() * 900000);
  console.log(code);
  return code;
}

export async function POST(request: Request) {
  const { phoneNumber } = await request.json();
  const https = require('https');
  
  console.log(phoneNumber);
  if (phoneNumber === null || phoneNumber === '' || phoneNumber === undefined) {
  console.log(phoneNumber);
    return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
  } else {
    const code = GetRandomCode();
    const now = new Date();
    const expireAt = new Date(now.setHours(now.getHours() + 1));
    const query = await sql `SELECT * FROM public.otp_tb WHERE phone_number = ${phoneNumber}`;
    if (query.length > 0) {
      await sql `UPDATE public.otp_tb SET otp_code = ${code}, created_at = ${now}, expired_at = ${expireAt}, code_sent_validation = true WHERE phone_number = ${phoneNumber}`;
    } else {
    await sql `INSERT INTO public.otp_tb(
	phone_number, otp_code, created_at, expired_at, code_sent_validation)
  VALUES (${phoneNumber}, ${code}, ${now}, ${expireAt}, true); `;
    }
    const data = JSON.stringify({
      'from': process.env.MELI_PAYAMAK_FROM,
    'to': phoneNumber,
    'text': `کد یکبار مصرف شما ${code}.`,
    });
    const options = {
      hostname: 'console.melipayamak.com',
      port: 443,
      path: '/api/send/simple/ddc96aadeb514a588dd799913f6d8792',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length
      }
  };
  const req = https.request(options, (res: { statusCode: string; on: (arg0: string, arg1: (d: any) => void) => void; }) => {
    console.log('statusCode: ' + res.statusCode);

    res.on('data', d => {
        process.stdout.write(d)
    });
});

req.on('error', (error: any) => {
    console.error(error);
});
req.write(data);
req.end();

    return NextResponse.json({ req: req }, { status: 200 });
  }


}
