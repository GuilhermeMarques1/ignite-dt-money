import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  // useEffect(() => {
  //   fetch("http:localhost:3000/api/transactions")
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }, []);

  useEffect(() => {
    api.get("/transactions")
      .then(response => console.log(response.data));
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>18/10/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$840,00</td>
            <td>Casa</td>
            <td>10/10/2022</td>
          </tr>
          <tr>
            <td>Ajuda trabalho de TI</td>
            <td className="deposit">R$150</td>
            <td>Desenvolvimento</td>
            <td>16/10/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}