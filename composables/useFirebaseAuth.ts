import { createUserWithEmailAndPassword} from 'firebase/auth'
import type {User} from 'firebase/auth';

export default function() {
  const { $auth } = useNuxtApp() as unknown as { $auth: import('firebase/auth').Auth }
  const user = useState<User | null>("fb_user", () => null)
  const registerUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const userCreds = await createUserWithEmailAndPassword($auth, email, password)
      if (userCreds) {
        user.value = userCreds.user
        return true
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
      }
      return false
    }
    return false
  }

const signInWithGoogle = async (): Promise<boolean> => {
    try {
        const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth')
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup($auth, provider)
        if (result) {
            user.value = result.user
            return true
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            // handle error
        }
        return false
    }
    return false
}

  return {
    user,
    registerUser,
    signInWithGoogle,
  }
}