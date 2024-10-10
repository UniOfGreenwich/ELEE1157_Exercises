# Basic Router Lab

## 1. Building your first network

As your first network lab you are going to | Look on performing basic configurations in network nodes and configuring a network. In detail you will be configure the switch management interface and implement basic connectivity between two user terminals. You are going to learn about basic but useful diagnostic commands for networking.

<div align=center>

![](./figure/task_1.png)

*Figure 1 Basic topo| Logy*

<p></p>

*Table 1 Addressing table.*

| Device| 	Interface |	IP Address / Prefix	| Default Gateway |
|-----|-------|------|-------|
| R1	| G0/0/0	  | 192.168.0.1 /24	| N/A
| 	| 	| 2001:db8:acad::1 /64| 	
| 	| 	| fe80::1	|
| 	| G0/0/1	| 192.168.1.1 /24|	
| 	| 	| 2001:db8:acad:1::1 /64|	
| 	| 	| fe80::1|	
| 	| Loopback0	| 10.0.0.1 /24	|
| 	| 	| 2001:db8:acad:2::1 /64|	
| 	| 	| fe80::1	|
| PC-A	| NIC	| 192.168.1.10 /24|	192.168.1.1
| 	| 	| 2001:db8:acad:1::10 /64|	fe80::1
| PC-B	| NIC	| 192.168.0.10 /24|	192.168.0.1
| 	| 	| 2001:db8:acad::10 /64	|fe80::1

</div>

~~~admonish info

- If you are unable to construct the network you can download the solution file here:

-  [Basic_Router_Lab_-_Solutions.pkt](./Basic_Router_Lab_-_Solutions.pkt)

~~~

## Scenario

This is a comprehensive lab to review previously covered IOS router commands. In Parts 1 and 2, you will cable the equipment and complete basic configurations and interface settings on the router.

In Part 3, you will use SSH to connect to the router remotely and utilize the IOS commands to retrieve information from the device to answer questions about the router. 

--------------

## Part 1: Set Up the Topology and Initialise Devices

1. Cable the network as shown in the topology.
    - Attach the devices as shown in the topology diagram, and cable as necessary.
    - Power on all the devices in the topology.

2. Initialize and reload the router and switch.

--------------

## Part 2: Configure Devices and Verify Connectivity

3. Configure the PC interfaces.
    - Configure the IP address, subnet mask, and default gateway settings on PC-A.

    - Configure the IP address, subnet mask, and default gateway settings on PC-B.

4. Configure the router

    - 	Console into the router and enable privileged `EXEC` mode.

        ~~~admonish terminal

        ```
        router> enable
        ```

        ~~~

    - 	Enter configuration mode.
    
        ~~~admonish terminal

        ```
        router# config terminal
        ```

        ~~~

    - 	Assign a device name to the router.

        ~~~admonish terminal

        ```
        router(config)# hostname R1
        ```

        ~~~

    - 	Set the router’s domain name as `ccna-lab.com`.

        ~~~admonish terminal

        ```
        R1(config)# ip domain name ccna-lab.com
        ```

        ~~~

    - 	Disable DNS lookup to prevent the router from attempting to translate incorrectly entered commands as though they were host names.

        ~~~admonish terminal

        ```
        R1(config)# no ip domain lookup
        ```

        ~~~

    - 	Encrypt the plaintext passwords.

        ~~~admonish terminal

        ```
        R1(config)# service password-encryption
        ```

        ~~~

    - 	Configure the system to require a minimum 12-character password.

        ~~~admonish terminal

        ```
        R1(config)# security passwords min-length 12
        ```

        ~~~

    - 	Configure the username `SSHadmin` with an encrypted password of `55Hadm!n2020`.

        ~~~admonish terminal

        ```
        R1(config)# username SSHadmin secret 55Hadm!n2020
        ```

        ~~~

    - 	Generate a set of crypto keys with a 1024 bit modulus

        ~~~admonish terminal

        ```
        R1(config)# crypto key generate rsa
        ```

        ~~~

    - 	Assign the privileged `EXEC` password to `$cisco!PRIV*`

        ~~~admonish terminal

        ```
        R1(config)# enable secret $cisco!PRIV*
        ```

        ~~~

    - 	Assign `$cisco!!CON*` as the console password, configure sessions to disconnect after four minutes of inactivity, and enable login.

        ~~~admonish terminal

        ```
        R1(config)# line console 0
        R1(config-line)# password $cisco!!CON*
        R1(config-line)# exec-timeout 4 0
        R1(config-line)# login
        ```
        
        ~~~

    - 	Assign `$cisco!!VTY*` as the `vty` password, configure the `vty` lines to accept SSH connections only, configure sessions to disconnect after four minutes of inactivity, and enable login using the local database.

        ~~~admonish terminal

        ```
        R1(config)# line vty 0 4
        R1(config-line)# password $cisco!!VTY*
        R1(config-line)# exec-timeout 4 0
        R1(config-line)# transport input ssh
        R1(config-line)# login local
        ```

        ~~~

    - 	Create a banner that warns anyone accessing the device that unauthorized access is prohibited.
        ~~~admonish terminal

        ```
        R1(config)# banner motd $ Authorized Users Only! $
        ```

        ~~~

    - 	Enable IPv6 Routing

        ~~~admonish terminal

        ```
        R1(config)# ipv6 unicast-routing
        ```

        ~~~

    - 	Configure all three interfaces on the router with the IPv4 and IPv6 addressing information from the addressing table above. Configure all three interfaces with descriptions. Activate all three interfaces.
        ~~~admonish terminal

        ```
        R1(config)# interface g0/0/0
        R1(config-if)# ip address 192.168.0.1 255.255.255.0
        R1(config-if)# ipv6 address fe80::1 link-local
        R1(config-if)# ipv6 address 2001:db8:acad::1/64
        R1(config-if)# description Connection to PC-B
        R1(config-if)# no shutdown
        R1(config-if)# exit
        R1(config)# interface g0/0/1
        R1(config-if)# ip address 192.168.1.1 255.255.255.0
        R1(config-if)# ipv6 address fe80::1 link-local
        R1(config-if)# ipv6 address 2001:db8:acad:1::1/64
        R1(config-if)# description Connection to S1
        R1(config-if)# no shutdown
        R1(config-if)# exit
        R1(config)# interface loopback0
        R1(config-if)# ip address 10.0.0.1 255.255.255.0
        R1(config-if)# ipv6 address fe80::1 link-local
        R1(config-if)# ipv6 address 2001:db8:acad:2::1/64
        R1(config-if)# description loopback adapter
        R1(config-if)# no shutdown
        R1(config-if)# exit
        ```

        ~~~

    - 	The router should not allow vty logins for two minutes if three failed login attempts occur within 60 seconds.
        
        ~~~admonish terminal

        ```
        R1(config)# login block-for 120 attempts 3 within 60
        R1(config)# exit
        ```

        ~~~

    - 	Set the clock on the router.

        ~~~admonish terminal

        ```
        R1# clock set 15:20:00 5 Jan 2024
        ```

        ~~~

    - 	Save the running configuration to the startup configuration file.
        
        ~~~admonish terminal

        ```
        R1# copy running-config startup-config
        ```

        ~~~

5.  ~~~admonish question collapsible=true title='What would be the result of reloading the router prior to completing the `copy running-config startup-config` command?'

    - The contents of the running configuration in RAM would be erased during reload. As a result, the router would boot up without a startup configuration and the user would be asked if they would like to enter initial configuration dialog.

    ~~~

6. Verify network connectivity.

    - Using the command line at PC-A, ping the IPv4 and IPv6 addresses for PC-B.
   
    ~~~admonish info
   
    - It may be necessary to disable the PCs firewall.
   
    ~~~

7. Remotely access R1 from PC-A using the Tera Term SSH client.
    - Using Tera Term on PC-A, open an `SSH` session to the `R1` Loopback interface IPv4 address. Ensure that the SSH radio button is selected and then click OK to connect to the router. Log in as `SSHadmin` with the password `55Hadm!n2020`.

8. Using Tera Term on PC-A, open an SSH session to the R1 Loopback interface IPv6 address. 
    - Ensure that the SSH radio button is selected and then click OK to connect to the router. 
    - Log in as `SSHadmin` with the password `55Hadm!n2020`. 
    
    ~~~admonish info
    
    - The IPv6 address should be surrounded with square brackets, i.e. [IPv6 address]

    ~~~

9.  ~~~admonish question collapsible=true title='Why is the Telnet protocol considered to be a security risk?'

    A Telnet session can be seen in plaintext. It is not encrypted. Passwords can easily be seen using a packet sniffer.

    ~~~

--------------

## Part 3: Display Router Information

In Part 3, you will use show commands from an SSH session to retrieve information from the router.

### Establish an SSH session to R1.

10. Using Tera Term on PC-B, open an SSH session to the R1 Loopback interface IPv6 address and log in as `SSHadmin` with the password `55Hadm!n2020`.

### Retrieve important hardware and software information.

11. Use the show version command to answer questions about the route

    ~~~admonish terminal

    ```
    R1# show version
    ```

    ~~~

12. ~~~admonish question collapsible=true title='What is the name of the IOS image that the router is running?'

    Image version may vary: `bootflash:/isr4300-universalk9.03.16.05.S.155-3.S5-ext.SPA.bin` 

    ~~~

<p></p>

13. ~~~admonish question collapsible=true title='How much non-volatile random-access memory (NVRAM) does the router have?'

    Answers may vary: 32768K bytes of NVRAM

    ~~~

<p></p>

14. ~~~admonish question collapsible=true title='How much Flash memory does the router have?'

    Answers may vary: 3223551K bytes of flash memory    

    ~~~

<p></p>

15. The `show` commands often provide multiple screens of outputs. Filtering the output allows a user to display certain sections of the output. To enable the filtering command, enter a pipe (|) character after a `show` command, followed by a filtering parameter and a filtering expression. You can match the output to the filtering statement by using the `include` keyword to display all lines from the output that contain the filtering expression. Filter the `show version` command, using `show version | include register` to answer the following question:

    - ~~~admonish question collapsible=true title='What is the boot process for the router on the next reload?'

        - Answers may vary. In most cases (`0x2102`), the router will undergo a normal boot, load the IOS from the Flash memory, and load the startup configuration from the `NVRAM` if present. If the config register is `0x2142`, the router will bypass the startup config and begin at the `user-mode` command prompt. If the initial boot fails, the router goes into `ROMMON` mode.

            ```
            R1# show version | include register
            Configuration register is 0x2142 (will be 0x2102 at next reload)
            ```

        ~~~

16. Display the start up configuration using `show startup-config`
   
    ~~~admonish terminal collapsible=true title='Hidden for ease of viewing...'

    ```
    R1# show start
    Using 1997 out of 33554432 bytes
    !
    ! Last configuration change at 15:20:18 UTC Thu Sep 5 2019
    ! NVRAM config last updated at 15:25:17 UTC Thu Sep 5 2019
    !
    version 16.9
    service timestamps debug datetime msec
    service timestamps log datetime msec
    service password-encryption
    platform qfp utilization monitor load 80
    no platform punt-keepalive disable-kernel-core
    !
    hostname R1
    !
    boot-start-marker
    boot-end-marker
    !
    security passwords min-length 12
    enable secret 5 $1$b2iA$/7Hj3HRmBXTbOESxm1yiG0
    !
    no aaa new-model
    !
    no ip domain lookup
    ip domain name ccna-lab.com
    !
    login block-for 120 attempts 3 within 60
    login on-success log
    !
    subscriber templating
    !
    ipv6 unicast-routing
    multilink bundle-name authenticated
    !
    license udi pid ISR4221/K9 sn FGL221693BV
    no license smart enable
    diagnostic bootup level minimal
    !
    spanning-tree extend system-id
    !
    username SSHadmin secret 5 $1$6HtR$T0QPZWbzp6bz3g6iwmZrP1
    !
    redundancy
    mode none
    !
    interface Loopback0
    description loopback adapter
    ip address 10.0.0.1 255.255.255.0
    ipv6 address FE80::1 link-local
    ipv6 address 2001:DB8:ACAD:2::1/64
    !
    interface GigabitEthernet0/0/0
    description Connection to PC-B
    ip address 192.168.0.1 255.255.255.0
    negotiation auto
    ipv6 address FE80::1 link-local
    ipv6 address 2001:DB8:ACAD::1/64
    !
    interface GigabitEthernet0/0/1
    description Connection to S1
    ip address 192.168.1.1 255.255.255.0
    negotiation auto
    ipv6 address FE80::1 link-local
    ipv6 address 2001:DB8:ACAD:1::1/64
    !
    interface Serial0/1/0
    no ip address
    !
    interface Serial0/1/1
    no ip address
    !
    ip forward-protocol nd
    no ip http server
    ip http secure-server
    !
    control-plane
    !
    banner motd ^C Authorized Users Only! ^C
    !
    line con 0
    exec-timeout 4 0
    password 7 145311021F07256A650B1C1B68
    logging synchronous
    login
    transport input none
    stopbits 1
    line aux 0
    stopbits 1
    line vty 0 4
    exec-timeout 4 0
    password 7 15560805172924656905011B59
    login local
    transport input ssh
    !
    end
    ```

    ~~~

<p></p>

17. ~~~admonish question collapsible=true title='How are passwords presented in the output?'

    - Passwords are encrypted due to the service password-encryption command.
    - Use the `show startup-config | section vty` command.

        ```
        R1# show startup-config | section vty
        line vty 0 4
        exec-timeout 4 0
        password 7 15560805172924656905011B59
        login local
        transport input ssh
        ```

    ~~~

18. Display the routing table on the router using the `show ip route` command on the router to answer the following questions:
    
    ~~~admonish terminal collapsible=true title='Hidden for ease of viewing...'
    
    ```
    R1# show ip route
    Codes: L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP
        D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
        N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
        E1 - OSPF external type 1, E2 - OSPF external type 2
        i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2
        ia - IS-IS inter area, * - candidate default, U - per-user static route
        o - ODR, P - periodic downloaded static route, H - NHRP, l - LISP
        a - application route
        + - replicated route, % - next hop override, p - overrides from PfR

    Gateway of last resort is not set

        10.0.0.0/8 is variably subnetted, 2 subnets, 2 masks
    C        10.0.0.0/24 is directly connected, Loopback0
    L        10.0.0.1/32 is directly connected, Loopback0
        192.168.0.0/24 is variably subnetted, 2 subnets, 2 masks
    C        192.168.0.0/24 is directly connected, GigabitEthernet0/0/0
    L        192.168.0.1/32 is directly connected, GigabitEthernet0/0/0
        192.168.1.0/24 is variably subnetted, 2 subnets, 2 masks
    C        192.168.1.0/24 is directly connected, GigabitEthernet0/0/1
    L        192.168.1.1/32 is directly connected, GigabitEthernet0/0/1
    ```

    ~~~

<p></p>

19. ~~~admonish question collapsible=true title='What code is used in the routing table to indicate a directly connected network?'

    - The C designates a directly connected subnet. 
    - An L designates a local interface. 
    - Both answers are correct

    ~~~

<p></p>

20. ~~~admonish question collapsible=true title='How many route entries are coded with a C code in the routing table?'

    - 3

    ~~~

21. Display a summary list of the interfaces on the router using the `show ip interface brief` command on the router to answer the following question:

    ~~~admonish terminal

    ```
    R1# show ip interface brief
    Interface              IP-Address      OK? Method Status                Protocol
    GigabitEthernet0/0/0   192.168.0.1     YES manual up                    up
    GigabitEthernet0/0/1   192.168.1.1     YES manual up                    up
    Serial0/1/0            unassigned      YES unset  up                    up
    Serial0/1/1            unassigned      YES unset  up                    up
    Loopback0              10.0.0.1        YES manual up                    up
    ```

    ~~~

22. ~~~admonish question collapsible=true title='What command changed the status of the Gigabit Ethernet ports from administratively down to up?'

    ```
    no shutdown
    ```

    ~~~

23. Use the `show ipv6 int brief` command to verify IPv6 settings on R1.

    ~~~admonish terminal

    ```
    R1# show ipv6 interface brief
    GigabitEthernet0/0/0   [up/up]
        FE80::1
        2001:DB8:ACAD::1
    GigabitEthernet0/0/1   [up/up]
        FE80::1
        2001:DB8:ACAD:1::1
    Serial0/1/0            [up/up]
        unassigned
    Serial0/1/1            [up/up]
        unassigned
    Loopback0              [up/up]
        FE80::1
        2001:DB8:ACAD:2::1
    ```

    ~~~

24. ~~~admonish question collapsible=true title='What is the meaning of the [up/up] part of the output?'

    The [up/up] status reflects the Layer 1 and Layer 2 status of the interface and does not rely on Layer 3 for status.

    ~~~

<p></p>

25. On PC-B, change its configuration so that it no longer has a static IPv6 address. You may have to reboot the machine. Then, issue the `ipconfig` command on PC-B to examine the IPv6 configuration.

<p></p>

26. ~~~admonish question collapsible=true title='What is the IPv6 address assigned to PC-B?' 

    - Answers will vary. IPv6 address of `2001:db8:acad:d428:7de2:997c:b05a`
    
    ~~~


<p></p>

27. ~~~admonish question collapsible=true title='What is the default gateway assigned to PC-B?'

    ```
    fe80::1
    ```

    ~~~

----

## Part 4: Reflection Questions

1.  In researching a network connectivity issue, a technician suspects that an interface was not enabled. 

    ~~~admonish question collapsible=true title='What `show` command could the technician use to troubleshoot this issue?'

    Answers may vary. However, `show ip interface brief` or `show interfaces` or `show startup-config` would provide the information.

    ~~~

<p></p>

2.  In researching a network connectivity issue, a technician suspects that an interface was assigned an incorrect subnet mask. 

    ~~~admonish question collapsible=true title='What `show` command could the technician use to troubleshoot this issue?'

    Answers may vary. `show startup-confi`g or `show running-config` or `show interfaces` or `show protocols` will provide the information.

    ~~~