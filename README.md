# K8s App with Prometheus and Grafana Logging

1. Setup EKS
2. Setup Nodes for EKS via cloudformation
3. Build and deploy dockerfile to ECR
4. Deploy App on EKS
5. Initialize Helm
6. Install Prometheus and Grafana via Helm
7. Add custom `job_name` into Prometheus ConfigMap
8. Proxy into prometheus and make sure everything is working