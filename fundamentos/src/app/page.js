import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="outline-dark">PRETO</Button>{` `}
      <Cabecalho titulo ="A sla" sub ="ENTAO COMO QUE É" />

      <a href="/fundamentos">Pagina Fundamentos </a><br/>
      <Link href= "/fundamentos">Pagina fundamentos</Link><br/>

    </main>
  );
}
