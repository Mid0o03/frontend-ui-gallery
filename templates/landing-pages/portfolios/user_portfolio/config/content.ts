export const content = {
    terminal: {
        welcomeMessage: "Welcome to PortfolioOS v1.0. Type 'help' for options.",
        lastLogin: `Last login: ${new Date().toDateString()} on ttys001`,
        whoami: {
            command: "whoami",
            data: {
                name: "Alex Doe",
                role: "Backend Engineer",
                stack: ["Go", "Rust", "K8s"],
                status: "Open to work",
                location: "Remote / Earth"
            }
        },
        projects: {
            command: "ls -la ./projects",
            list: [
                {
                    id: '1',
                    name: 'api-gateway-v2',
                    description: 'High-performance microservices gateway written in Go. Handles 10k+ rps with minimal latency.',
                    techStack: ['Go', 'gRPC'],
                    icon: 'server',
                    color: 'blue'
                },
                {
                    id: '2',
                    name: 'data-pipeline-rs',
                    description: 'Real-time ETL pipeline engine built in Rust. Optimized for memory safety and concurrency.',
                    techStack: ['Rust', 'Kafka'],
                    icon: 'database',
                    color: 'purple'
                },
                {
                    id: '3',
                    name: 'kube-autoscaler',
                    description: 'Custom Kubernetes operator for predictive autoscaling based on custom metrics.',
                    techStack: ['K8s', 'Python'],
                    icon: 'box',
                    color: 'green'
                },
                {
                    id: '4',
                    name: 'auth-service',
                    description: 'Centralized authentication service handling OAuth2/OIDC for internal tools.',
                    techStack: ['Node', 'Redis'],
                    icon: 'lock',
                    color: 'orange'
                }
            ]
        },
        contact: {
            command: "./contact.sh --interactive",
            initializingMsg: "// Initializing secure connection...",
            labels: {
                name: "var name =",
                email: "var email =",
                message: "var msg =",
                button: "EXECUTE"
            },
            placeholders: {
                name: '"Enter your name"',
                email: '"your@email.com"',
                message: '"Write your message here..."'
            }
        }
    },
    sidebar: {
        title: "PortfolioOS",
        menu: [
            { id: 'about', label: 'whoami', icon: 'User' },
            { id: 'projects', label: 'projects', icon: 'Folder' },
            { id: 'contact', label: 'contact.sh', icon: 'Mail' }
        ]
    },
    statusBar: {
        branch: "main",
        encoding: "UTF-8",
        language: "TypeScript",
        readyMsg: "Ready"
    }
};
