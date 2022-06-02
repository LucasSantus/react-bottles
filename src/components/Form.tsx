import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { ApiService } from '../services/ApiService';
import { TextFieldCustom } from '../ui/components/styles/TextField';

interface BottleProps {
    id?: string;
    type: string;
}

export const FormBottle: React.FC< BottleProps > = (props) => {
    const [id, setId] = useState('');

    const [ liquid, setLiquid ] = useState("");
    const [ volume, setVolume ] = useState("");
    const [ model, setModel ] = useState("");
    const [ price, setPrice ] = useState("");

    const [requisition, setRequisition] = useState('Registrar');
    const [disabled, setDisabled] = useState(false);

    let navigate = useNavigate();

    const handleChangeLiquid = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLiquid(event.target.value);
    };

    const handleChangeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(event.target.value);
    };

    const handleChangeModel = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModel(event.target.value);
    };

    const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
    };

    function handleGetBottle(id: string){
        ApiService
            .get(`/bottles/${id}`)
            .then((response) => {
                setId(response.data.id);
                setLiquid(response.data.liquid);
                setVolume(response.data.volume); 
                setModel(response.data.model);
                setPrice(response.data.price);
            })
            .catch((error) => {
                console.log(`Falha ao tentar recuperar os dados!\n Erro: ${error}`);
            });
    }

    function handlePostSubmit(){
        console.log(`
            "liquid": ${liquid},
            "volume": ${volume},
            "model": ${model},
            "price": ${price},        
            `);

        ApiService
            .post("/bottles", {
                "liquid": liquid,
                "volume": volume,
                "model": model,
                "price": price,            
            })
            .catch((error) => {
                console.log(`Falha ao tentar ${requisition} os dados!\n Erro: ${error}`);
            });
    }

    function handlePutSubmit(){
        console.log(`
            "liquid": ${liquid},
            "volume": ${volume},
            "model": ${model},
            "price": ${price},            
            `);

        ApiService
            .put(`/bottles/${id}`, {
                "liquid": liquid,
                "volume": volume,
                "model": model,
                "price": price,            
            })
            .catch((error) => {
                console.log(`Falha ao tentar ${requisition} os dados!\n Erro: ${error}`);
            });
    }

    function handleIsValid(){
        if(liquid !== "" && volume !== "" && model !== "" && price !== "" ){
            if(props.id){
                handlePutSubmit();
            }
            else{
                handlePostSubmit();
            }
            navigate(`/`);
        }
    }

    useEffect(() => {
        if(props.type === 'change'){
            setRequisition("Alterar")
            props.id ? handleGetBottle(props.id) : console.log("Falha ao tentar recuperar o id do aluno!\n") 
        }
        else if(props.type === 'read'){
            setDisabled(true)
            setRequisition("Visualizar")
            props.id ? handleGetBottle(props.id) : console.log("Falha ao tentar recuperar o id do aluno!\n") 
        }
    }, []);

    return (
        <Box component="form" noValidate autoComplete="off" className='w-full' >
            <div className='flex flex-col mt-20 gap-4'>
                <TextFieldCustom                                            
                    required
                    disabled={disabled}
                    id="id_liquid"
                    label="Líquido"
                    type="text"
                    value={liquid}
                    onChange={handleChangeLiquid}
                    error={liquid === '' ? true : false}
                    helperText={liquid === '' ? 'Preencha o Líquido' : ''}
                />

                <TextFieldCustom                                            
                    required
                    disabled={disabled}
                    id="id_volume"
                    label="Volume"
                    type="text"
                    value={volume}
                    onChange={handleChangeVolume}
                    error={volume === '' ? true : false}
                    helperText={volume === '' ? 'Preencha o Volume' : ''}
                />

                <TextFieldCustom                                            
                    required
                    disabled={disabled}
                    id="id_model"
                    label="Modelo da Garrafa"
                    type="text"
                    value={model}
                    onChange={handleChangeModel}
                    error={model === '' ? true : false}
                    helperText={model === '' ? 'Preencha o Modelo da Garrafa' : ''}
                />

                <TextFieldCustom                                            
                    required
                    disabled={disabled}
                    id="id_price"
                    label="Preço"
                    type="price"
                    value={price}
                    onChange={handleChangePrice}
                    error={price === '' ? true : false}
                    helperText={price === '' ? 'Preencha o Preço' : ''}
                />
            </div>

            {!disabled ? (
                <div className='container flex flex-row gap-4'>
                    <button
                        className="mt-6 bg-gray-600 border border-transparent rounded-md py-2 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        onClick={() => {
                            navigate(`/`);
                        }}
                    >
                        Voltar
                    </button>

                    <button
                        className="mt-6 bg-indigo-600 border border-transparent rounded-md py-2 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => {
                            handleIsValid()
                        }}
                    >
                        {requisition}
                    </button>
                </div>
            ) : ( <> </> )}
        </Box>
    );
}