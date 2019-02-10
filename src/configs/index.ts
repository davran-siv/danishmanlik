export const configuration = Object.freeze(
  {
    companyName: 'S&B Consulting',
    websiteMotto: 'For your business',
    remoteApi: 'https://jsonplaceholder.typicode.com',
    tokenApi: 'http://localhost:8081/api/auth/login',
    refreshTokenApi: 'http://localhost:8081/api/auth/token',
    contacts: {
      instagramUrl: 'https://www.instagram.com/sbdanismanlik',
      facebookUrl: 'https://www.facebook.com/groups/sbdanismanlik',
      emailAddress: 'info@sbdanismanlik.com',
      officeAddress: 'Pınarbaşı Mah. Atatürk Bulv. No: 34 Konyaaltı / ANTALYA',
      phones: [
        {
          phoneNumber: '+90 (554) 999 72 89',
          isPrimary: true
        },
        {
          phoneNumber: '+90 (553) 063 81 77',
          isPrimary: false
        }
      ]
    }
  }
)
