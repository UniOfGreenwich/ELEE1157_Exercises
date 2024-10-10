
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

~~~admonish question collapsible=true title='**Netmask**'
      
    - The subnet mask for `/28` is `255.255.255.240` (in binary: `11111111.11111111.11111111.11110000`)

~~~

~~~admonish question collapsible=true title='**Calculate the Number of Subnets and Hosts per Subnet**'

- With `/28`, we have 4 host bits remaining.
- Number of subnets created: \\(2^4 = 16\\) possible subnets.
- Hosts per subnet: \\(2^4 - 2 = 14\\) usable addresses per subnet (subtracting 2 for network and broadcast addresses).

~~~

~~~admonish question collapsible=true title='**Determine the Subnet Ranges**'

<table style="font-size:15px">
<tr>
    <th>Subnet ID</th>
    <th>Range</th>
    <th>Usable Host Range</th>
</tr>
<tr>
    <td><code>192.168.1.0/28</code></td>
    <td><code>192.168.1.0 - 192.168.1.15</code></td>
    <td><code>192.168.1.1 - 192.168.1.14</code></td>
</tr>
<tr>
    <td><code>192.168.1.16/28</code></td>
    <td><code>192.168.1.16 - 192.168.1.31</code></td>
    <td><code>192.168.1.17 - 192.168.1.30</code></td>
</tr>
<tr>
    <td><code>192.168.1.32/28</code></td>
    <td><code>192.168.1.32 - 192.168.1.47</code></td>
    <td><code>192.168.1.33 - 192.168.1.46</code></td>
</tr>
<tr>
    <td><code>192.168.1.48/28</code></td>
    <td><code>192.168.1.48 - 192.168.1.63</code></td>
    <td><code>192.168.1.49 - 192.168.1.62</code></td>
</tr>
</table>


~~~

---

## 2: Given Network `172.16.0.0/22`

~~~admonish question collapsible=true title='**Netmask**'

- The subnet mask for `/22` is `255.255.252.0` (in binary: `11111111.11111111.11111100.00000000`)

~~~

~~~admonish question collapsible=true title='**Calculate the Number of Subnets and Hosts per Subnet**'


- With `/22`, we have 10 host bits remaining.
- Number of subnets created: \\(2^2 = 4\\) subnets when starting from `/20`.
- Hosts per subnet: \\(2^{10} - 2 = 1022\\) usable addresses per subnet.

~~~

~~~admonish question collapsible=true title='**Determine the Subnet Ranges**'

<table style="font-size:15px">
<tr>
    <th>Subnet ID</th>
    <th>Range</th>
    <th>Usable Host Range</th>
</tr>
<tr>
    <td><code>192.168.1.0/28</code></td>
    <td><code>192.168.1.0 - 192.168.1.15</code></td>
    <td><code>192.168.1.1 - 192.168.1.14</code></td>
</tr>
<tr>
    <td><code>192.168.1.16/28</code></td>
    <td><code>192.168.1.16 - 192.168.1.31</code></td>
    <td><code>192.168.1.17 - 192.168.1.30</code></td>
</tr>
<tr>
    <td><code>192.168.1.32/28</code></td>
    <td><code>192.168.1.32 - 192.168.1.47</code></td>
    <td><code>192.168.1.33 - 192.168.1.46</code></td>
</tr>
<tr>
    <td><code>192.168.1.48/28</code></td>
    <td><code>192.168.1.48 - 192.168.1.63</code></td>
    <td><code>192.168.1.49 - 192.168.1.62</code></td>
</tr>
</table>

~~~

---

## 3: Given Network `10.0.0.0/16`

~~~admonish question collapsible=true title='**Netmask**'

 - The subnet mask for `/16` is `255.255.0.0` (in binary: `11111111.11111111.00000000.00000000`)

~~~

~~~admonish question collapsible=true title='**Calculate the Number of Subnets and Hosts per Subnet**'

- With `/16`, we have 16 host bits remaining.
- Number of subnets created: \\(2^8 = 256\\) if subnetting from `/8`.
- Hosts per subnet: \\(2^{16} - 2 = 65534\\) usable addresses per subnet.

~~~

~~~admonish question collapsible=true title='**Determine the Subnet Ranges**'

<table style="font-size:15px">
<tr>
    <th>Subnet ID</th>
    <th>Range</th>
    <th>Usable Host Range</th>
</tr>
<tr>
    <td><code>10.0.0.0/16</code></td>
    <td><code>10.0.0.0 - 10.0.255.255</code></td>
    <td><code>10.0.0.1 - 10.0.255.254</code></td>
</tr>
<tr>
    <td><code>10.1.0.0/16</code></td>
    <td><code>10.1.0.0 - 10.1.255.255</code></td>
    <td><code>10.1.0.1 - 10.1.255.254</code></td>
</tr>
<tr>
    <td><code>10.2.0.0/16</code></td>
    <td><code>10.2.0.0 - 10.2.255.255</code></td>
    <td><code>10.2.0.1 - 10.2.255.254</code></td>
</tr>
</table>

~~~

---


## 4: Given Network `192.168.10.0/27`

~~~admonish question collapsible=true title='**Netmask**'
  
- The subnet mask for `/27` is `255.255.255.224` (in binary: `11111111.11111111.11111111.11100000`)

~~~

~~~admonish question collapsible=true title='**Calculate the Number of Subnets and Hosts per Subnet**'

- With `/27`, we have 5 host bits remaining.
- Number of subnets created: \\(2^3 = 8\\) subnets when starting from `/24`.
- Hosts per subnet: \\(2^5 - 2 = 30\\) usable addresses per subnet.

~~~

~~~admonish question collapsible=true title='**Determine the Subnet Ranges**'

<table style="font-size:14px">
<tr>
    <th>Subnet ID</th>
    <th>Range</th>
    <th>Usable Host Range</th>
</tr>
<tr>
    <td><code>192.168.10.0/27</code></td>
    <td><code>192.168.10.0 - 192.168.10.31</code></td>
    <td><code>192.168.10.1 - 192.168.10.30</code></td>
</tr>
<tr>
    <td><code>192.168.10.32/27</code></td>
    <td><code>192.168.10.32 - 192.168.10.63</code></td>
    <td><code>192.168.10.33 - 192.168.10.62</code></td>
</tr>
<tr>
    <td><code>192.168.10.64/27</code></td>
    <td><code>192.168.10.64 - 192.168.10.95</code></td>
    <td><code>192.168.10.65 - 192.168.10.94</code></td>
</tr>
</table>

~~~

---

## 5: Given Network `203.0.113.0/24`

~~~admonish question collapsible=true title='**Netmask**'

- The subnet mask for `/24` is `255.255.255.0` (in binary: `11111111.11111111.11111111.00000000`)

~~~

~~~admonish question collapsible=true title='**Calculate the Number of Subnets and Hosts per Subnet**'

- With `/24`, we have 8 host bits remaining.
- Number of subnets created: \\(2^0 = 1\\) subnet (no further division from `/24`).
- Hosts per subnet: \\(2^8 - 2 = 254\\) usable addresses.

~~~

~~~admonish question collapsible=true title='**Determine the Subnet Range**'

<table style="font-size:15px">
<tr>
    <th>Subnet ID</th>
    <th>Range</th>
    <th>Usable Host Range</th>
</tr>
<tr>
    <td><code>203.0.113.0/24</code></td>
    <td><code>203.0.113.0 - 203.0.113.255</code></td>
    <td><code>203.0.113.1 - 203.0.113.254</code></td>
</tr>
</table>

~~~

---

## 6: Given Network `172.16.0.0/19`

~~~admonish question collapsible=true title='**Netmask**'

- The subnet mask for `/19` is `255.255.224.0` (in binary: `11111111.11111111.11100000.00000000`)

~~~

~~~admonish question collapsible=true title='**Calculate the Number of Subnets and Hosts per Subnet**'

- With `/19`, we have 13 host bits remaining.
- Number of subnets created: \\(2^5 = 32\\) subnets if starting from `/14`.
- Hosts per subnet: \\(2^{13} - 2 = 8190\\) usable addresses per subnet.

~~~

~~~admonish question collapsible=true title='**Determine the Subnet Ranges**'

<table style="font-size:15px">
<tr>
    <th>Subnet ID</th>
    <th>Range</th>
    <th>Usable Host Range</th>
</tr>
<tr>
    <td><code>172.16.0.0/19</code></td>
    <td><code>172.16.0.0 - 172.16.31.255</code></td>
    <td><code>172.16.0.1 - 172.16.31.254</code></td>
</tr>
<tr>
    <td><code>172.16.32.0/19</code></td>
    <td><code>172.16.32.0 - 172.16.63.255</code></td>
    <td><code>172.16.32.1 - 172.16.63.254</code></td>
</tr>
</table>

~~~

---

## 7: Given Network `198.51.100.128/30`

~~~admonish question collapsible=true title='**Netmask**'

- The subnet mask for `/30` is `255.255.255.252` (in binary: `11111111.11111111.11111111.11111100`)

~~~

~~~admonish question collapsible=true title='**Calculate the Number of Subnets and Hosts per Subnet**'

- With `/30`, we have 2 host bits remaining.
- Hosts per subnet: \\(2^2 - 2 = 2\\) usable addresses per subnet.

~~~

~~~admonish question collapsible=true title='**Determine the Subnet Range**'

<table style="font-size:13px">
<tr>
    <th>Subnet ID</th>
    <th>Range</th>
    <th>Usable Host Range</th>
</tr>
<tr>
    <td><code>198.51.100.128/30</code></td>
    <td><code>198.51.100.128 - 198.51.100.131</code></td>
    <td><code>198.51.100.129 - 198.51.100.130</code></td>
</tr>
</table>

~~~

---

## 8: Given Network `192.0.2.64/26`

~~~admonish question collapsible=true title='**Netmask**'
      
- The subnet mask for `/26` is `255.255.255.192` (in binary: `11111111.11111111.11111111.11000000`)

~~~

~~~admonish question collapsible=true title='**Calculate the Number of Subnets and Hosts per Subnet**'

- With `/26`, we have 6 host bits remaining.
- Hosts per subnet: \\(2^6 - 2 = 62\\) usable addresses.

~~~
'
~~~admonish question collapsible=true title='**Determine the Subnet Ranges**'

<table style="font-size:13px">
<tr>
    <th>Subnet ID</th>
    <th>Range</th>
    <th>Usable Host Range</th>
</tr>
<tr>
    <td><code>192.0.2.64/26</code></td>
    <td><code>192.0.2.64 - 192.0.2.127</code></td>
    <td><code>192.0.2.65 - 192.0.2.126</code></td>
</tr>
</table>

~~~