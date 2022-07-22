import express from 'express';

import { create_usuario, select_usuario_by_nusp, create_unidade_ensino, login, create_sala_estudos, select_sala_estudos_by_nome, select_usuarios_by_unidade, select_usuarios_by_curso, select_sala_estudos_by_unidade } from '../controllers/controller.js';

const router = express.Router();

//Cria um usuário
//Retorna status 200 em sucesso
//Retorna status 409 caso o usuário já exista no banco
router.post('/usuario/create', create_usuario);

//Seleciona o usuário do nusp indicado na rota
//Retorna o status 200 e um json com os dados desse usuário em caso de sucesso
//Retorna o status 404 caso o usuário não exista
router.get('/usuario/:nusp', select_usuario_by_nusp);

//Seleciona os usuário de uma unidade de ensino específica
//Retorna o status 200 e o um json com as informações dos possíveis alunos (caso tenha algum)
//Retorna o status 404 caso a unidade de ensino não exista
router.get('/usuarios/unidade/:unidade_ensino', select_usuarios_by_unidade);

//Seleciona os usuário de uma curso específico
//Retorna o status 200 e o um json com as informações dos possíveis alunos (caso tenha algum)
//Retorna o status 404 caso o curso não exista
router.get('/usuarios/curso/:curso', select_usuarios_by_curso);

//Autentica o usuário no banco, verificando o nusp e a senha
//Retorna o status 200 e um json com os dados do usuário em caso de sucesso
router.get('/login/:nusp/:password', login)

router.post('/unidade_ensino/create', create_unidade_ensino);

//Cria uma sala de estudo
//Retorna o status 200 em caso de sucesso
//Retorna o status 409 caso a sala já tenha sido cadastrada
router.post('/sala_estudos/create', create_sala_estudos)

//Seleciona a sala de estudos com o nome que vem na rota
//Retorna o status 200 e um json com os dados da sala em caso de sucesso
//Retorna o status 404 caso a sala não exista
router.get('/sala_estudos/:nome', select_sala_estudos_by_nome);

//Seleciona as salas de estudos de uma unidade específica
//Retorna o status 200 e um json com os dados da sala em caso de sucesso (caso tenha salas dessa unidade)
//Retorna o status 404 caso a unidade não exista
router.get('/sala_estudos/unidade/:unidade_ensino', select_sala_estudos_by_unidade)


export default router;