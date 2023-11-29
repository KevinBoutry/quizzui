import type { Category } from '@/types/Category';
import type { Theme } from '@/types/Theme'
import type { Type } from '@/types/Type';
import { ref } from 'vue';

const CreateAccountPanelStatus = ref(false);
const LoginPanelStatus = ref(false);
const isLogged = ref(false);
const endGamePanelStatus = ref(false);

const PreviewQuizz = ref({
  name: "",
  description: '',
  theme: {} as Theme,
  type: {} as Type,
  time: 0,
  thumbnail: undefined as undefined|Blob,
  categories: [] as Category[],
  textColor: 'FFFFFF',
  backgroundColor: '000000',
  showTitle: true,
  public: true,
});

export function composable() {
  return {
    CreateAccountPanelStatus,
    LoginPanelStatus,
    isLogged,
    endGamePanelStatus,
    PreviewQuizz,
  };
}
