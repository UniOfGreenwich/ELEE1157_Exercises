
# IPv4 Subnetting Practice Examples

**Subnetting** is the practice of dividing a large network into smaller, more manageable subnetworks. This process allows better control of IP address allocation, improves network performance, and enhances security by isolating segments. Understanding these basics allows you to design networks effectively, optimizing address allocation and segmenting traffic to meet specific requirements:

- **IP Address**: Composed of 32 bits in IPv4, split into network and host portions.

- **Subnet Mask**: Determines which portion of an IP address identifies the network and which portion identifies the host. For example, a /24 subnet mask (255.255.255.0) reserves the first 24 bits for the network, leaving the remaining 8 bits for hosts.

- **CIDR Notation**: Classless Inter-Domain Routing (CIDR) uses a suffix (e.g., /26) to specify the number of bits used for the network portion, enabling flexible subnetting.
- **Hosts Per Subnet**: The number of available hosts is calculated by 2^host_bits - 2, accounting for the network and broadcast addresses that cannot be assigned to devices.

- **Subnet Range**: Each subnet has a unique range of IP addresses, starting with a network address and ending with a broadcast address. The usable host range lies between these two addresses.

    ~~~admonish example title='**Example**: For `192.168.1.0/28`:'

    - **Subnet Mask**: `255.255.255.240`
    - **Hosts**: `14` usable addresses
    - **Subnet Range**: `192.168.1.0 - 192.168.1.15`
        - with a usable host range of `192.168.1.1 - 192.168.1.14`.

    ~~~

---

Below you will find some exercises to get you familiar and at ease with calculating different subnets.

## 1: Given Network `192.168.1.0/28`

{{#quiz quiz_1.toml}}

---

## 2: Given Network `172.16.0.0/22`

{{#quiz quiz_2.toml}}

---

## 3: Given Network `10.0.0.0/16`

{{#quiz quiz_3.toml}}

---


## 4: Given Network `192.168.10.0/27`

{{#quiz quiz_4.toml}}

---

## 5: Given Network `203.0.113.0/24`

{{#quiz quiz_5.toml}}

---

## 6: Given Network `172.16.0.0/19`

{{#quiz quiz_6.toml}}

---

## 7: Given Network `198.51.100.128/30`

{{#quiz quiz_7.toml}}