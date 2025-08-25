// import { isTokenExpired } from '~/utils/auth'
// import {provideApolloClient} from '@vue/apollo-composable'

// export default defineNuxtPlugin((nuxtApp) => {
//   provideApolloClient(useApollo().clients.default)
//   // 30 days
//   const config = useRuntimeConfig()
//   const apiUrl = config.public.apiUrl

//   nuxtApp.hook('apollo:auth', async ({ token }) => {
//     const accessToken = useCookie('token', { path: '/', 
//     maxAge: 900,
//     domain: process.env.NODE_ENV=='production'?'bankroll.cash': undefined,
//     secure:process.env.NODE_ENV=='production',
//     httpOnly:process.env.NODE_ENV=='production', 
//   }) // 1 hour
//   const refreshToken = useCookie('refresh', { path: '/', maxAge: 60 * 60 * 24 * 30 ,
//                         domain: process.env.NODE_ENV=='production'?'bankroll.cash': undefined,
//                         secure:process.env.NODE_ENV=='production',
//                         httpOnly:process.env.NODE_ENV=='production',
//                       }) 
//     if (isTokenExpired(accessToken.value) && refreshToken.value) {
//       try {
//         const { data: access, refresh } = await useFetch(`${apiUrl}/auth/tokens/refresh`, {
//           method: 'POST',
//           body: { token: refreshToken.value,renew:isTokenExpired(refreshToken.value) },
//         })
//         if (access) {
//           accessToken.value = access // ✅ Set new access token
//         }
//         if (refresh) {
//           refreshToken.value = refresh // ✅ Set new refresh token
//         }
//       } catch (error) {
//         accessToken.value = null
//         refreshToken.value = null
//       }
//     }

//     // ✅ Set the token for Apollo requests
//     token.value = accessToken.value ? `Bearer ${accessToken.value}` : ''
//   })
// })


