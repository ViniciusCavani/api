const base = require('../base/base.json')


const listar = (req, res) => {
    base.sort(function(a, b) { 
        return a.status.localeCompare(b.status)
    })
    res.send(base);
};

const resumoStatus = (req, res) => {
    res.send({
        qtdStatusProcessando: base.filter(base => base.status === "PROCESSANDO").length,
        qtdStatusPendente:    base.filter(base => base.status === "PENDENTE").length,
        qtdStatusAprovado:    base.filter(base => base.status === "APROVADO").length,
        qtdStatusCancelado:   base.filter(base => base.status === "CANCELADO").length,
        qtdTotalPedidos: base.length
    });
};

const totalVendas = (req, res) => {
    let total = 0
    base.forEach(item => {
        total += item.valor
    })
    res.send({
        totalVendas: total.toFixed(2)
    })
};



module.exports = {
  listar,
  resumoStatus,
  totalVendas
};