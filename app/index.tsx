import Pergunta from "@/components/questionario/Pergunta";
import Resultado from "@/components/questionario/Resultado";
import Logo from "@/components/template/Logo";
import Pagina from "@/components/template/Pagina";
import useQuestonario from "@/data/hooks/useQuestionario";
import { View } from "react-native";

export default function Index() {

  const { pergunta, responder, pontuacao, totalPerguntas, concluido, reiniciar } = useQuestonario()


  return (
    <Pagina>
      <View style={{ gap: 40 }}>
      <Logo/>
      {concluido ? (
        <Resultado 
        pontuacao={pontuacao} 
        totalDePerguntas={totalPerguntas} 
        reiniciar={reiniciar}/>
      ):(
        <Pergunta 
        pergunta={pergunta} 
        opcaoSelecionada={responder}/>
      )
    }
      </View>
    </Pagina>
  );
}
