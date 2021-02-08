module.exports=function(conn){
    var schema = mongoose.Schema({
        eIntegrator: {type: String, trim:true, required: [true,'Entegrator seciniz'], default: 'uyumsoft', enum:['uyumsoft','finansbank','innova','logo','turkcell','ingbank']},
        name: {type: String,  trim:true, required: [true,'Kisa bir isim (Sube vs) gereklidir']},
        invoice:{
            url: {type: String, trim:true, default: ''},
            firmNo: {type: Number, default: 0},
            username: {type: String, trim:true, default: ''},
            password: {type: String, default: ''},
            prefixOutbox: {type: String, trim:true, default: 'FAT',minlength:[3,'Ön ekler 3 Karakter olmalıdır'],maxlength:[3,'Ön ekler 3 Karakter olmalıdır'],required: [true,'3 Karakter Fatura Ön Ek gereklidir']},
            prefixInbox: {type: String, trim:true, default: 'AFT'},
            postboxAlias: {type: String, trim:true, default: ''},
            senderboxAlias: {type: String, trim:true, default: ''},
            xslt:{type: mongoose.Schema.Types.ObjectId, ref: 'files'},
            xsltFiles:[{type: mongoose.Schema.Types.ObjectId, ref: 'files'}],
            localConnector:{
                import:{ //sqlserver to tr216
                    localConnector:{type: mongoose.Schema.Types.ObjectId, ref: 'local_connectors' , default:null}, 
                    status: {type: String, trim:true, default: ''},
                    error:{code:'',message:''}
                },
                export:{ //tr216 to sqlserver
                    localConnector:{type: mongoose.Schema.Types.ObjectId, ref: 'local_connectors' , default:null}, 
                    status: {type: String, trim:true, default: ''},
                    error:{code:'',message:''}
                },
            }
        },
        despatch:{
            url: {type: String, trim:true, default: ''},
            firmNo: {type: Number, default: 0},
            username: {type: String, trim:true, default: ''},
            password: {type: String, default: ''},
            prefixOutbox: {type: String, trim:true, default: 'IRS',minlength:[3,'Ön ekler 3 Karakter olmalıdır'],maxlength:[3,'Ön ekler 3 Karakter olmalıdır'],required: [true,'Sevk Irsaliyesi icin 3 Karakter Ön Ek gereklidir']},
            prefixInbox: {type: String, trim:true, default: 'AIR',minlength:[3,'Ön ekler 3 Karakter olmalıdır'],maxlength:[3,'Ön ekler 3 Karakter olmalıdır'],required: [true,'Alim Irsaliyesi icin 3 Karakter Ön Ek gereklidir']},
            prefixReceiptAdviceOutbox: {type: String, trim:true, default: 'TES',minlength:[3,'Ön ekler 3 Karakter olmalıdır'],maxlength:[3,'Ön ekler 3 Karakter olmalıdır'],required: [true,'Irsaliye Teslim Yanit Numarasi icin 3 Karakter Ön Ek gereklidir']},
            prefixReceiptAdviceInbox: {type: String, trim:true, default: 'TES',minlength:[3,'Ön ekler 3 Karakter olmalıdır'],maxlength:[3,'Ön ekler 3 Karakter olmalıdır'],required: [true,'Irsaliye Teslim Yanit Numarasi icin 3 Karakter Ön Ek gereklidir']},
            postboxAlias: {type: String, trim:true, default: ''},
            senderboxAlias: {type: String, trim:true, default: ''},
            xslt:{type: mongoose.Schema.Types.ObjectId, ref: 'files'},
            xsltFiles:[{type: mongoose.Schema.Types.ObjectId, ref: 'files'}],
            localConnector:{
                import:{ //sqlserver to tr216
                    localConnector:{type: mongoose.Schema.Types.ObjectId, ref: 'local_connectors' , default:null}, 
                    status: {type: String, trim:true, default: ''},
                    error:{code:'',message:''}
                },
                export:{ //tr216 to sqlserver
                    localConnector:{type: mongoose.Schema.Types.ObjectId, ref: 'local_connectors' , default:null}, 
                    status: {type: String, trim:true, default: ''},
                    error:{code:'',message:''}
                },
            }

        },
        order:{
            url: {type: String, trim:true, default: ''},
            firmNo: {type: Number, default: 0},
            username: {type: String, trim:true, default: ''},
            password: {type: String, default: ''},
            prefixOutbox: {type: String, trim:true, default: 'SIP',minlength:[3,'Ön ekler 3 Karakter olmalıdır'],maxlength:[3,'Ön ekler 3 Karakter olmalıdır'],required: [true,'3 Karakter Siparis Ön Ek gereklidir']},
            prefixInbox: {type: String, trim:true, default: 'ASP',minlength:[3,'Ön ekler 3 Karakter olmalıdır'],maxlength:[3,'Ön ekler 3 Karakter olmalıdır'],required: [true,'3 Karakter Alim Siparis Ön Ek gereklidir']},
            postboxAlias: {type: String, trim:true, default: ''},
            senderboxAlias: {type: String, trim:true, default: ''},
            xslt:{type: mongoose.Schema.Types.ObjectId, ref: 'files'},
            xsltFiles:[{type: mongoose.Schema.Types.ObjectId, ref: 'files'}],
            localConnector:{
                import:{ //sqlserver to tr216
                    localConnector:{type: mongoose.Schema.Types.ObjectId, ref: 'local_connectors' , default:null}, 
                    status: {type: String, trim:true, default: ''},
                    error:{code:'',message:''}
                },
                export:{ //tr216 to sqlserver
                    localConnector:{type: mongoose.Schema.Types.ObjectId, ref: 'local_connectors' , default:null}, 
                    status: {type: String, trim:true, default: ''},
                    error:{code:'',message:''}
                },
            }
        },
        document:{
            url: {type: String, trim:true, default: ''},
            firmNo: {type: Number, default: 0},
            username: {type: String, trim:true, default: ''},
            password: {type: String, default: ''},
            prefixOutbox: {type: String, trim:true, default: 'BEL',minlength:[3,'Ön ekler 3 Karakter olmalıdır'],maxlength:[3,'Ön ekler 3 Karakter olmalıdır'],required: [true,'3 Karakter dokuman Ön Ek gereklidir']},
            prefixInbox: {type: String, trim:true, default: 'GBE',minlength:[3,'Ön ekler 3 Karakter olmalıdır'],maxlength:[3,'Ön ekler 3 Karakter olmalıdır'],required: [true,'3 Karakter gelen dokuman Ön Ek gereklidir']},
            postboxAlias: {type: String, trim:true, default: ''},
            senderboxAlias: {type: String, trim:true, default: ''},
            xslt:{type: mongoose.Schema.Types.ObjectId, ref: 'files'},
            xsltFiles:[{type: mongoose.Schema.Types.ObjectId, ref: 'files'}],
            localConnector:{
                import:{ //sqlserver to tr216
                    localConnector:{type: mongoose.Schema.Types.ObjectId, ref: 'local_connectors' , default:null}, 
                    status: {type: String, trim:true, default: ''},
                    error:{code:'',message:''}
                },
                export:{ //tr216 to sqlserver
                    localConnector:{type: mongoose.Schema.Types.ObjectId, ref: 'local_connectors' , default:null}, 
                    status: {type: String, trim:true, default: ''},
                    error:{code:'',message:''}
                },
            }
        },
        ledger:{
            url: {type: String, trim:true, default: ''},
            firmNo: {type: Number, default: 0},
            username: {type: String, trim:true, default: ''},
            password: {type: String, default: ''},
            localConnector:{
                import:{ //sqlserver to tr216
                    localConnector:{type: mongoose.Schema.Types.ObjectId, ref: 'local_connectors' , default:null}, 
                    status: {type: String, trim:true, default: ''},
                    error:{code:'',message:''}
                },
                export:{ //tr216 to sqlserver
                    localConnector:{type: mongoose.Schema.Types.ObjectId, ref: 'local_connectors' , default:null}, 
                    status: {type: String, trim:true, default: ''},
                    error:{code:'',message:''}
                },
            }
        },
        party:dbType.partyType,
        createdDate: { type: Date,default: Date.now},
        modifiedDate:{ type: Date,default: Date.now},
        isDefault: {type: Boolean, default: false},
        passive: {type: Boolean, default: false}
    })

    schema.pre('save', function(next) {
        next()
        //bir seyler ters giderse 
        // next(new Error('ters giden birseyler var'))
    })
    schema.pre('remove', function(next) {
        next()
    })

    schema.pre('remove', true, function(next, done) {
        next()
        //bir seyler ters giderse 
        // next(new Error('ters giden birseyler var'))
    })

    schema.on('init', function(model) {

    })
    schema.plugin(mongoosePaginate)
    

    var collectionName='integrators'
    var model=conn.model(collectionName, schema)
    
    model.removeOne=(member, filter,cb)=>{ sendToTrash(conn,collectionName,member,filter,cb) }
    
    // model.relations={pos_device_zreports:'posDevice'}

    return model
}
