
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState("invoicing");
  
  return (
    <section id="use-cases" className="section-container">
      <div className="text-center mb-16">
        <span className="badge-primary inline-block mb-4">CASOS DE USO</span>
        <h2 className="mb-6">
          Solución para 
          <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> cada necesidad </span>
          contable
        </h2>
        <p className="max-w-3xl mx-auto">
          Irrelevant se adapta a diferentes escenarios de negocio, automatizando procesos específicos según tus necesidades.
        </p>
      </div>
      
      <Tabs defaultValue="invoicing" className="w-full max-w-5xl mx-auto" onValueChange={setActiveTab}>
        <TabsList className="w-full justify-center mb-10 bg-irrelevant-interactive p-1 rounded-full">
          <TabsTrigger 
            value="invoicing" 
            className={`py-3 px-6 rounded-full text-base transition-all ${
              activeTab === 'invoicing' 
                ? 'bg-irrelevant-primary text-white shadow-lg' 
                : 'text-white hover:text-irrelevant-primary'
            }`}
          >
            Facturación Automatizada
          </TabsTrigger>
          <TabsTrigger 
            value="causation" 
            className={`py-3 px-6 rounded-full text-base transition-all ${
              activeTab === 'causation' 
                ? 'bg-irrelevant-primary text-white shadow-lg' 
                : 'text-white hover:text-irrelevant-primary'
            }`}
          >
            Causación Inteligente
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="invoicing" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-irrelevant flex flex-col">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3">Equipos comerciales dispersos</h3>
              <p className="text-sm flex-grow">
                Tus vendedores pueden cargar ventas desde cualquier lugar con una interfaz rápida o simplemente enviando una imagen del pedido.
              </p>
              <div className="mt-6 pt-4 border-t border-irrelevant-interactive">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Facturación en tiempo real</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Captura móvil de pedidos</span>
                </div>
              </div>
            </div>
            
            <div className="card-irrelevant flex flex-col">
              <div className="text-3xl mb-4">🏬</div>
              <h3 className="text-xl font-bold mb-3">Despachos físicos desde puntos de venta</h3>
              <p className="text-sm flex-grow">
                Factura en segundos con solo una foto del pedido. Ideal para negocios con múltiples puntos de despacho o venta.
              </p>
              <div className="mt-6 pt-4 border-t border-irrelevant-interactive">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Reconocimiento de pedidos</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Procesamiento en segundos</span>
                </div>
              </div>
            </div>
            
            <div className="card-irrelevant flex flex-col">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-3">Tiendas eCommerce</h3>
              <p className="text-sm flex-grow">
                Integración vía API o desde el correo para facturación automática de las compras realizadas en tu tienda online.
              </p>
              <div className="mt-6 pt-4 border-t border-irrelevant-interactive">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Integración con plataformas</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Facturación automática</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="causation" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-irrelevant flex flex-col">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-3">Facturas por email</h3>
              <p className="text-sm flex-grow">
                Solo reenvíalas → el sistema las clasifica y causa automáticamente, identificando toda la información relevante.
              </p>
              <div className="mt-6 pt-4 border-t border-irrelevant-interactive">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Procesamiento automatizado</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Extracción inteligente de datos</span>
                </div>
              </div>
            </div>
            
            <div className="card-irrelevant flex flex-col">
              <div className="text-3xl mb-4">📸</div>
              <h3 className="text-xl font-bold mb-3">Facturas físicas o fotos</h3>
              <p className="text-sm flex-grow">
                Sube una imagen o envíala por WhatsApp, y el sistema hace la causación por ti, extrayendo todos los datos necesarios.
              </p>
              <div className="mt-6 pt-4 border-t border-irrelevant-interactive">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Reconocimiento de imágenes</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">OCR de alta precisión</span>
                </div>
              </div>
            </div>
            
            <div className="card-irrelevant flex flex-col">
              <div className="text-3xl mb-4">🧾</div>
              <h3 className="text-xl font-bold mb-3">XML o PDF</h3>
              <p className="text-sm flex-grow">
                Compatible con los formatos estándar contables como los de la DIAN, procesándolos de forma precisa y estructurada.
              </p>
              <div className="mt-6 pt-4 border-t border-irrelevant-interactive">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Compatibilidad estándar</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Interpretación normativa</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="text-center mt-16">
        <a 
          href="https://wa.me/1234567890?text=Quiero%20implementar%20esta%20solución%20en%20mi%20empresa"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-flex items-center"
        >
          👉 Quiero implementar esto en mi empresa
        </a>
      </div>
    </section>
  );
};

export default UseCasesSection;
