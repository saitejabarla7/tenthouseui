// // src/components/SupplierList.js
// const suppliers = [
//     { id: 1, name: 'Supplier A', description: 'Quality tents and accessories' },
//     { id: 2, name: 'Supplier B', description: 'Reliable tent services' },
//   ];
  
//   const SupplierList = () => {
//     return (
//       <div>
//         <h2>Our Suppliers</h2>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           {suppliers.map(supplier => (
//             <li key={supplier.id} style={supplierStyle}>
//               <h3>{supplier.name}</h3>
//               <p>{supplier.description}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
  
//   const supplierStyle = {
//     borderBottom: '1px solid #ddd',
//     padding: '10px 0',
//   };
  
//   export default SupplierList;
  

// src/components/SupplierList.js

const suppliers = [
    { 
      id: 1, 
      name: 'svs decorations', 
      description: 'Available all types of decoration sets', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1Q096hEFcUmFK5cIbIIQDuKim7kf2vjetA&s' // Add image URL for Supplier A
    },
    { 
      id: 2, 
      name: 'A1 events', 
      description: 'Available all type of mangalasnanam set', 
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/3/IT/TJ/NJ/148543809/event-management-services.jpg' // Add image URL for Supplier B
    },
    { 
        id: 3, 
        name: 'Lucky digitals', 
        description: 'Professional Photographers for all events', 
        image: 'https://www.brides.com/thmb/n2D-fmnb8I8Tpgm08jzs1YxfDzc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/questions-to-asj-wedding-photographer-recirc-getty-images--61ea34e9e287426d9ca41ae4615e964a.jpg' // Add image URL for Supplier B
      },
  ];
  
  const SupplierList = () => {
    return (
      <div>
        <h2>Our Services</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {suppliers.map(supplier => (
            <li key={supplier.id} style={supplierStyle}>
              {/* Add Image */}
              <img
                src={supplier.image}
                alt={supplier.name}
                style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '10px' }}
              />
              <div>
                <h3>{supplier.name}</h3>
                <p>{supplier.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const supplierStyle = {
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };
  
  export default SupplierList;
  

