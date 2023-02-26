import styled from "@emotion/styled";

const Respuesta = styled.div`
  font-family: "Lato", sans-serif;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 2 rem;
`;
const Imagen = styled.img`
  display: block;
  width: 200px;
`;

const Texto = styled.p`
  font-size: 16px;
  span {
    font-weight: 700;
    font-size: 20px;
  }
`;

const Precio = styled.p`
  font-size: 16px;
  span {
    font-weight: 700;
    font-size: 22px;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Respuesta>
      <Imagen
        src={`https://www.cryptocompare.com/${IMAGEURL}`}
        alt="Imagen Cripto"
      />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación última 24hrs: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          última actulización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Respuesta>
  );
};

export default Resultado;
