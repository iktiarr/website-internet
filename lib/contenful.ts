// lib/contentful.ts (Utility untuk ambil data)
export const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getHeroData() {
    const entries = await client.getEntries({
        content_type: 'halamanHero', // pastikan ID sesuai di Contentful
        limit: 1,
    });
    return entries.items[0].fields;
}
export async function getWhatsappData() {
  const entries = await client.getEntries({
    content_type: 'whatsappUtama', // ID Content Type untuk WhatsApp
    limit: 1,
  });
  return entries.items[0].fields;
}
// src/lib/contentful.ts
// src/lib/contentful.ts
export async function getPricingData() {
  const [dynamic, wifiOnly, waData] = await Promise.all([
    client.getEntries({ content_type: 'halamanHarga' }),
    client.getEntries({ content_type: 'halamanHargaWifiOnly' }), // Pastikan ID ini benar di Contentful
    client.getEntries({ content_type: 'whatsappUtama', limit: 1 }),
  ]);

  // Fungsi pembantu untuk menyeragamkan data
  const normalize = (items: any[]) => items.map(item => ({
    id: item.sys.id,
    // Di sini kuncinya: ambil 'nama' ATAU 'jenisPaket'
    namaPaket: item.fields.nama || item.fields.jenisPaket || "Paket Internet",
    deskripsi: item.fields.deskripsi || [],
    harga: item.fields.harga || 0,
    promo: item.fields.promo || null,
  }));

  return {
    dynamic: normalize(dynamic.items),
    wifiOnly: normalize(wifiOnly.items),
    waInfo: waData.items[0]?.fields || { link: "" },
  };
}
