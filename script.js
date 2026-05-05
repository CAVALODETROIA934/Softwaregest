body { font-family: sans-serif; background: #f4f4f9; padding: 20px; }
header { text-align: center; margin-bottom: 30px; }
#search { padding: 10px; width: 80%; max-width: 400px; border-radius: 5px; border: 1px solid #ccc; }

#worker-container { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
    gap: 20px; 
}

.card { 
    background: white; padding: 20px; border-radius: 10px; 
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-top: 5px solid #ddd;
}
.card.available { border-top-color: #2ecc71; }
.card.busy { border-top-color: #e74c3c; opacity: 0.7; }

.btn-contact { 
    display: inline-block; margin-top: 10px; padding: 10px; 
    background: #007bff; color: white; text-decoration: none; border-radius: 5px; 
}card.innerHTML = `
    <div class="status-bar">${w.status}</div>
    <div class="card-content">
        <h3>${w.nome}</h3>
        <p><strong>${w.cargo}</strong></p>
        <p>Localização: Luanda</p>
    </div>
    ${isAvailable ? 
        `<a href="https://wa.me/${w.tel}" class="btn-contact">CONTACTAR VIA WHATSAPP</a>` : 
        `<p class="busy-msg">Atualmente indisponível</p>`}
`;
