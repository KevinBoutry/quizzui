import { ref } from 'vue';

const errorMessage = ref();
const userProfile = ref({ username: '', userid: 0, email: '' });

export function user() {
  return {
    errorMessage,
    userProfile,
  };
}
