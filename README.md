<div align="center">
  <img src="src/logo.png" alt="RustRadio Logo" width="280"/>
  
  # 📡 RustRadio
  
  ### *Web Interface for Rust-based SDR Containers*
  
  <p align="center">
    <em>Manage your SDR workloads with Rust containers</em><br>
    React frontend + Rust backend + Rust SDR containers
  </p>
  
  ![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat&logo=react)
  ![Rust](https://img.shields.io/badge/Backend-Rust-orange?style=flat&logo=rust)
  ![Containers](https://img.shields.io/badge/SDR-Rust%20Containers-red?style=flat&logo=rust)
</div>

---

## 🎯 **What is RustRadio?**

RustRadio provides a web interface to deploy and manage **Rust-based SDR containers**. Instead of complex CI/CD pipelines, get instant SDR task deployment with the performance and safety benefits of Rust.

---

## 🦀 **Why Rust Containers for SDR?**

### **vs Jenkins/CI/CD Pipelines:**
| **Jenkins Pipeline** | **RustRadio Rust Containers** |
|---------------------|-------------------------------|
| ⏳ Build → Test → Deploy cycle | ⚡ Instant deployment |
| 🐌 Heavy overhead for simple tasks | 🚀 Lightweight, fast startup |
| 🔧 Complex pipeline configuration | 📱 Simple web interface |
| 🐍 Python/GNU Radio performance | 🦀 Rust native performance |

### **Rust Container Benefits:**
- **🚀 Performance** - Rust's zero-cost abstractions for real-time SDR
- **🛡️ Memory Safety** - No crashes from buffer overflows in RF processing
- **⚡ Fast Startup** - Containers boot in milliseconds, not seconds
- **🔒 Security** - Rust's safety guarantees in containerized environments
- **📦 Small Footprint** - Compact binaries, smaller container images

---

## 🔄 **How it works**

```
Web UI → Rust API → Docker → Rust SDR Container
   ↑                              ↓
   ←──── Real-time logs & status ────
```

1. **Select SDR task** from web interface
2. **Deploy instantly** - Rust container starts in ~100ms
3. **Monitor real-time** - Live performance metrics and logs
4. **High performance** - Native Rust SDR processing

---

## 🚀 **Quick Start**

```bash
git clone https://github.com/yourname/RustRadio.git
cd RustRadio
docker compose up --build
```

Open http://localhost:3000 and deploy your first Rust SDR container.

---

## 🧪 **Rust SDR Containers**

Pre-built Rust containers for common SDR tasks:
- **rust-rtlsdr** - High-performance RTL-SDR decoder
- **rust-hackrf** - Native HackRF signal processing
- **rust-fft** - Optimized FFT analysis
- **rust-demod** - Fast digital demodulation
- **Custom** - Deploy your own Rust SDR applications

---

## 💡 **Perfect for**

### **Development & Testing**
- Quick prototyping of Rust SDR algorithms
- A/B testing different implementations
- Performance benchmarking

### **Production Workloads**
- Low-latency signal processing
- High-throughput RF analysis
- Resource-constrained environments

### **When Jenkins is Overkill**
- Simple SDR task deployment
- Interactive development workflows
- Rapid iteration cycles

---

## 📁 **Structure**

```
RustRadio/
├── frontend/           # React dashboard
├── backend/            # Rust orchestration API
├── rust-containers/    # Rust SDR applications
│   ├── rtlsdr-decoder/
│   ├── hackrf-analyzer/
│   └── fft-processor/
└── docker-compose.yml  # Complete stack
```

---

## 🤝 **Contributing**

Help us build better Rust SDR tooling:
- 🦀 **Rust SDR containers** - Port existing tools or create new ones
- ⚡ **Performance optimizations** - Make things faster
- 📱 **UI improvements** - Better user experience

---

<div align="center">
  <p><strong>Fast, safe, and simple SDR with Rust 🦀</strong></p>
  
  [![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=flat&logo=github)](https://github.com/yourname/RustRadio)
  
  <sub>When you need performance, not pipelines</sub>
</div>%                                                 
