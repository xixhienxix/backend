const Edo_Cuenta = require('../models/edo_cuenta')

var mongoose = require('mongoose');

exports.agregarPago=(req,res)=>{
    
        let pago = {
            Folio: req.body.Folio,
            Fecha:new Date(),
            Referencia:req.body.Referencia,
            Descripcion:req.body.Descripcion,
            Forma_de_Pago:req.body.Forma_De_Pago,
            Cantidad:req.body.Cantidad,
            Cargo:req.body.Cargo,
            Abono:req.body.Abono,
            Total:req.body.Total
        }
        
      
        Edo_Cuenta.create(pago, function(err, result) {
          if (err) {
            res.send(err);
          } else {
            console.log(result);
            res.send(result);
          }
        });
          
}

exports.getCuentas= (req,res)=>{

    Edo_Cuenta.find({Folio:req.params.id},(err,result)=>{
        if(err)
        {res.status(500).send(err)}
        else
        {res.status(200).send(result)}

    })
}